// import logo from './logo.svg';
import Events from "./components/events";
import Elements from "./components/elements";
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
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <PageContent>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/events" element={<Events />} />
        </Routes> */}
      </PageContent>
      <SubFooter></SubFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;
