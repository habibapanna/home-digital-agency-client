import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../src/firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUserToDB = async (user) => {
    const userData = {
      uid: user.uid,
      name: user.displayName || "No Name",
      email: user.email,
      photoURL: user.photoURL || "",
      createdAt: new Date().toISOString(),
    };
  
    // Check if the user already exists in the database
    const res = await fetch(`https://home-digital-agency-server.vercel.app/users?email=${user.email}`);
    const existingUser = await res.json();
  
    if (existingUser.length === 0) {
      await fetch("https://home-digital-agency-server.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    }
  };
  

  const createUser = async (email, password, name) => {
    setLoading(true);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (!user) {
            throw new Error("User creation failed. No user data returned.");
        }

        // Wait for Firebase to update the profile
        await updateProfile(user, { displayName: name });

        // Save user to DB
        await saveUserToDB({ ...user, displayName: name });

        return user;
    } catch (error) {
        console.error("Firebase Auth Error:", error.message);
        alert(error.message);
        throw error;
    } finally {
        setLoading(false);
    }
};


  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Save user to DB (if not already saved)
      saveUserToDB(userCredential.user);

      return userCredential.user;
    } catch (error) {
      console.error("Login Error:", error.message);
      alert(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
  
      // Ensure the user has a display name
      const userData = {
        uid: user.uid,
        name: user.displayName || "Google User",
        email: user.email,
        photoURL: user.photoURL || "",
        createdAt: new Date().toISOString(),
      };
  
      // Save user to DB
      await saveUserToDB(userData);
  
      return user;
    } catch (error) {
      console.error("Google Login Error:", error.message);
      alert(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  


  

  const logOutUser = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOutUser,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
