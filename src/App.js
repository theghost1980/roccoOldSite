import logo from "./logo.svg";
import "./App.css";
import NavBar2 from "./Components/NavBar2";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Work from "./Components/Work";

function App() {
  return (
    <div className={"App"} id="top">
      <NavBar2 />
      <Welcome />
      <About />
      <Work />
    </div>
  );
}

export default App;
