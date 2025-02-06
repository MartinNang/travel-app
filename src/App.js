// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Search from "./components/search";
import NavigationMenu from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Api from "./components/api";

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/api" element={<Api />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
