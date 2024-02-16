import logo from "./logo.svg";
import "./App.css";
import Weather from "./Components/Weather";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
