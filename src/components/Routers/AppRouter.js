import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Profile from "../Profiles/Profile";
import Dogs from "../Profiles/Dogs";
import NewDog from "../Profiles/DogUtil/NewDog";
import DogProfile from "../Profiles/DogProfile";
import UpdatedProfile from "../Profiles/UpdateProfile";
import Journal from "../Journal/Journal";
import Logout from "../Auth/Logout";
import Owners from "../Profiles/Owners";
import BreedInfoHome from "../Api/BreedInfoHome";

const AppRouter = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div style={{ marginTop: "50px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newDog" element={<NewDog />} />
          <Route path="/login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updateProfile" element={<UpdatedProfile />} />
          <Route path="/profile" element={<Owners />} />
          <Route path="/profile/:ownId" element={<Profile />} />
          <Route path="/dog" element={<Dogs />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dogProfile/:dogId" element={<DogProfile />} />
          <Route path="/journal/:journalId" element={<Journal />} />
          <Route path="/infoPlz" element={<BreedInfoHome />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
