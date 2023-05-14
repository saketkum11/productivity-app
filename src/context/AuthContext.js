import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const token = user?.uid;
  const isLoggedIn = token ? true : false;
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const registerUser = async ({ email, password }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const logoutUser = async () => {
    try {
      const response = await signOut(auth);
      setUser(response);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const value = {
    registerUser,
    loginUser,
    isLoggedIn,
    logoutUser,
    error,
    user,
    token,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
