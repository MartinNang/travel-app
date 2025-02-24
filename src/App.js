// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Search from "./components/search";
import NavigationMenu from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Itineraries from "./components/itineraries";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Api from "./components/api";
import SubFooter from "./components/subFooter";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <SubFooter></SubFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;
