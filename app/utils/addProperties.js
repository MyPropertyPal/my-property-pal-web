import React, { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import geocoding from "./geocoding";

async function addProperties(user, prop) {
  const subCollectionRef = collection(db, `users/${user.email}/properties`);
  const geoCodeAddress = `${prop.streetAddress} ${prop.city} ${prop.state} ${prop.zip}`;

  // Get coords of address and set
  const coords = await geocoding(geoCodeAddress);
  prop.coords = coords;
  const setData = async () => {
    console.log(prop);
    await addDoc(subCollectionRef, prop).then(
      alert("Property has been added to db")
    );
  };
}

export default addProperties;
