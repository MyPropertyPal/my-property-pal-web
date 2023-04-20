import app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../config";
import { collection } from "firebase/firestore";

// Helper fns
export default async function getUser(collection, id) {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  // const user = db.collection(collection).doc.
}
