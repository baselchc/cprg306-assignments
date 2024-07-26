import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsCollection = collection(db, "users", userId, "items");
  const q = query(itemsCollection);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}

export async function deleteItem(userId, itemId) {
  const itemDoc = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemDoc);
}
