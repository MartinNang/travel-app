import React from "react";
import Home from "./home";
import Itineraries from "./itineraries";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Events from "./events";
import Api from "./api";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";

const PageContent = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/events" element={<Events />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default PageContent;
