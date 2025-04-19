/*
  This component displays every page depending on the URL

*/

import React, { useState } from "react";
import Home from "../pages/home";
import Itineraries from "../pages/itineraries";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Events from "../pages/events";
import Api from "../api/api";
import Feed from "../pages/feed";
import CreateItinerary from "../pages/createItinerary";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/profile";
import Contact from "../pages/contact";
import InsideItinerary from "../pages/insideItinerary";
import Cookies from "../pages/cookies";
import PageNotFound from "../pages/pageNotFound";
import AboutUs from "../pages/aboutUs";
import ViewItinerary from "../pages/viewItinerary";

const PageContent = () => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="page-content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route
          path="/events"
          element={<Events wishlist={wishlist} setWishlist={setWishlist} />}
        />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/profile/:profileId" element={<Profile />} />
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
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/view-itinerary" element={<ViewItinerary />}/>
      </Routes>
    </div>
  );
};

export default PageContent;
