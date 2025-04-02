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
  // query,
  // where,
} from "firebase/firestore";

export async function getUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));

    const users: User[] = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        gender: doc.data().gender,
        role: doc.data().role,
        status: doc.data().status,
      };
    });

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
  name: string;
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

export async function updateUser(userId: string, userData: Partial<User>) {
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
    const userRef = doc(db, "users", userId);

    await deleteDoc(userRef);

    return true;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to delete user");
  }
}

export async function searchUsers(searchTerm: string) {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);

    const users: User[] = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        gender: doc.data().gender,
        role: doc.data().role,
        status: doc.data().status,
        ...doc.data(),
      }))
      .filter((user) => {
        const searchTermLower = searchTerm.toLowerCase();

        return (
          user.name.toLowerCase().includes(searchTermLower) ||
          user.email.toLowerCase().includes(searchTermLower)
        );
      });

    return users;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to search users");
  }
}
