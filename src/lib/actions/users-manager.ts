"use server";

import { db } from "@/src/lib/firebase";
import { User } from "@/src/types";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

export async function getUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));

    const users: User[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      first_name: doc.data().first_name,
      last_name: doc.data().last_name,
      email: doc.data().email,
      gender: doc.data().gender,
      role: doc.data().role,
      status: doc.data().status,
      ...doc.data(),
    }));

    return users;
  } catch (error) {
    console.log("error", error);

    throw new Error("Failed to fetch users");
  }
}
export async function getUserById(userId: string) {
  try {
    const docRef = doc(db, "users", userId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch user");
  }
}

export async function createUser(userData: {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  status: string;
}) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to create user");
  }
}

export async function updateUser(
  userId: string,
  userData: Partial<{
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    status: string;
  }>
) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to update user");
  }
}

export async function deleteUser(userId: string) {
  try {
    await deleteDoc(doc(db, "users", userId));
    return true;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to delete user");
  }
}

export async function searchUsers(searchTerm: string) {
  try {
    const q = query(
      collection(db, "users"),
      where("name", ">=", searchTerm),
      where("name", "<=", searchTerm + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to search users");
  }
}
