// import logo from './logo.svg';
import NavigationMenu from "./components/ui/header";
import Footer from "./components/ui/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SubFooter from "./components/ui/subFooter";
import PageContent from "./components/ui/pageContent";
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <PageContent></PageContent>
      <SubFooter></SubFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;
