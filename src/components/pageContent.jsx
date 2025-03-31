import React from "react";
import Home from "./home";
import Itineraries from "./itineraries";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Events from "./events";
import Api from "./api";
import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import Profile from "./profile";
=======
import Profile from "./pages/profile";
import Contact from "./pages/contact";
import InsideItinerary from "./pages/insideItinerary";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        {/* <Route path="/contact" element={<Contact />} /> */}
=======
        <Route path="/create-itinerary" element={<CreateItinerary />} />
        <Route path=" /inside-itinerary" element={<InsideItinerary />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/contact" element={<Contact />} />
>>>>>>> Stashed changes
      </Routes>
    </div>
  );
};

export default PageContent;
