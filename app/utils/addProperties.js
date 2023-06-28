import React, { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function addProperties(user, prop) {
  const subCollectionRef = collection(db, `users/${user.email}/properties`);
  console.log(subCollectionRef);
  const setData = async () => {
    await addDoc(subCollectionRef, prop);
  };
  setData();
}

export default addProperties;
