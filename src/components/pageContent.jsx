import React from "react";
import Home from "./home";
import Itineraries from "./itineraries";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Events from "./events";
import Api from "./api";
import { Route, Routes } from "react-router-dom";

const PageContent = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/search" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default PageContent;
