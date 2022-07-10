import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Profile from "../Profiles/Profile";
import Dogs from "../Profiles/Dogs";
import NewDog from "../NewDog";
import DogProfile from "../Profiles/DogProfile";
import UpdatedProfile from "../Profiles/UpdateProfile";
import JournalForm from "../Journal/JournalForm";

const AppRouter = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div style={{ marginTop: "50px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newDog" element={<NewDog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updateProfile" element={<UpdatedProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:ownId" element={<Profile />} />
          <Route path="/dog" element={<Dogs />} />
          <Route path="/dogProfile/:dogId" element={<DogProfile />} />
          <Route path="/journalEntry" element={<JournalForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
