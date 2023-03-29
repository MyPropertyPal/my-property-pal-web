import app from "./config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import addData from "./firestore/addData";
const auth = getAuth(app);

export default async function signUp(email, password) {
  let result = null,
    error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    alert("data added");
  } catch (e) {
    error = e;
  }

  return { result, error };
}
