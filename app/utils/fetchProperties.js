import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

async function fetchProperties(user, setProperties) {
  try {
    const subCollectionRef = collection(db, `users/${user.email}/properties`);

    // H
    const querySnapshot = await getDocs(subCollectionRef);
    const userProperties = [];

    querySnapshot.docs.forEach((doc) => {
      // Access the data of each document using the `data()` method
      const property = doc.data();
      // console.log(property)
      userProperties.push(property);
    });

    console.log(userProperties);
    return userProperties;
  } catch (error) {
    console.error(error);
  }
}

export default fetchProperties;
