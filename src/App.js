import logo from "./logo.svg";
import "./App.css";
import NavBar2 from "./Components/NavBar2";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Work from "./Components/Work";
import BooksPapers from "./Components/BooksPapers";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className={"App"} id="top">
      <NavBar2 />
      <Welcome />
      <About />
      <Work />
      <BooksPapers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
