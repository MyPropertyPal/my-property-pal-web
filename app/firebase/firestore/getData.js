import app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { collection } from "firebase/firestore";
const axios = require("axios");

/**
 * HELPER FUNCTIONS
 */

// GET USER
export default async function getUser(collection, id) {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  // const user = db.collection(collection).doc.
}

//GET ALL USERS
const getProperties = async () => {
  const snapshot =  db.collection("properties")
  console.log("SNAPSHOT ===>", snapshot);
};

//GET PROPERTIES

const options = {
  method: "GET",
  url: "https://zillow-com1.p.rapidapi.com/propertyByCoordinates",
  params: { long: "-118.504744", lat: "34.01822", d: "0.1", includeSold: "1" },
  headers: {
    "X-RapidAPI-Key": "e42da7b395msh7d24a30cfb214d8p181175jsn2683f3c9c1ae",
    "X-RapidAPI-Host": "zillow-com1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export { getProperties };
