import {
  deleteDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../firebase/config";

async function deleteProperty(user, prop) {
  try {
    const subCollectionRef = collection(db, `users/${user.email}/properties`);
    // console.log(prop);
    const coords = prop.coords;

    // Query for the document based on the property name
    const querySnapshot = await getDocs(
      query(subCollectionRef, where("coords", "==", coords))
    );

    // Check if the document exists
    if (querySnapshot.size === 0) {
      alert("Property not found in the db");
      return;
    }

    // Assuming you only have one document with the given propName, delete it
    const docRef = querySnapshot.docs[0].ref;
    console.log(docRef);
    await deleteDoc(docRef);

    alert("Property has been deleted from the db");
  } catch (error) {
    console.error("Error deleting property:", error);
    // Handle the error as needed
  }
}
export default deleteProperty;
