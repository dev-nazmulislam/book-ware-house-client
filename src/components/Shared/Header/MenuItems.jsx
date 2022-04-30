import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebaseInit";
import CustomLink from "../CustomLink/CustomLink";

const MenuItems = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/allbook">All Book</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      <CustomLink to="/about">About Us</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      {user ? (
        <button onClick={() => signOut(auth)} className="border-0 bg-light">
          Logout
        </button>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
};

export default MenuItems;
