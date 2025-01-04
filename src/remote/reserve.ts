import { addDoc, collection } from "firebase/firestore";
import { ReserveValues } from "../models/reserve";
import { COLLECTIONS } from "../constants";
import { store } from "./firebase";

export async function reserve(reserveValues: ReserveValues) {
  return addDoc(collection(store, COLLECTIONS.PRE_RESERVATION), reserveValues);
}
