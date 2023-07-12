import React, { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import geocoding from "./geocoding";


async function addProperties(user, prop) {

  const subCollectionRef = collection(db, `users/${user.email}/properties`);
  const geoCodeAddress = `${prop.streetAddress} ${prop.city} ${prop.state} ${prop.zip}`;

  // api call simulation... ->
  const coords = await geocoding(geoCodeAddress);
  // console.log(formatedProp.Results[0], "++++");
  prop.coords = coords;
  const setData = async () => {
    console.log(prop);
    await addDoc(subCollectionRef, prop).then(
      alert("Property has been added to db")
    );
  };
  // ADD TO DB ACTION
  setData();
}

export default addProperties;
