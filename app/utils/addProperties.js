import React, { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import geocoding from "./geocoding";

async function addProperties(user, prop) {
  const subCollectionRef = collection(db, `users/${user.email}/properties`);
  const geoCodeAddress = `${prop.streetAddress} ${prop.city} ${prop.state} ${prop.zip}`;

  // api call simulation... ->
  const formatedProp = await geocoding(geoCodeAddress);
  console.log(formatedProp.Results[0], "++++");

  const setData = async () => {
    await addDoc(subCollectionRef, formatedProp);
  };
  // ADD TO DB ACTION
  setData();
}

export default addProperties;
