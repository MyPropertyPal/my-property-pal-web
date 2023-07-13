import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

async function fetchProperties(user, setProperties) {
  try {
    const subCollectionRef = collection(db, `users/${user.email}/properties`);

    // H
    const querySnapshot = await getDocs(subCollectionRef);
    const userProperties = [];

    querySnapshot.forEach((doc) => {
      // Perform operations with the documents here
      userProperties.push(doc.data());
    });
    if (userProperties) {
      setProperties(userProperties);
      // RETURNS THE USERS PROPERTIES
      return userProperties;
    } else {
      return "waiting for properties";
    }
    // console.log(userProperties);
  } catch (error) {
    console.log("Error getting subcollection documents: ", error);
  }
}

export default fetchProperties;
