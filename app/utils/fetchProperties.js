import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function fetchProperties(user, setProperties) {
  const fetchData = async () => {
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
        console.log(userProperties);
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
  };

  fetchData();
}

export default fetchProperties;
