/*
  This component displays every page depending on the URL

*/

import React, { useState } from "react";
import Home from "./pages/home";
import Itineraries from "./itineraries";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Events from "./pages/events";
import Api from "./pages/api";
import Feed from "./pages/feed";
import CreateItinerary from "./pages/createItinerary";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile";
import Contact from "./pages/contact";
import InsideItinerary from "./pages/insideItinerary";
import Cookies from "./pages/cookies";

const PageContent = () => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route
          path="/events"
          element={<Events wishlist={wishlist} setWishlist={setWishlist} />}
        />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/create-itinerary"
          element={
            <CreateItinerary wishlist={wishlist} setWishlist={setWishlist} />
          }
        />
        <Route path="/inside-itinerary" element={<InsideItinerary />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </div>
  );
};

export default PageContent;
