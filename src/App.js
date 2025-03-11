// import logo from './logo.svg';
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
import PageContent from "./components/pageContent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <PageContent>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </PageContent>
      <SubFooter></SubFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;
