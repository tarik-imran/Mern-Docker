import logo from "./logo.svg";
import "./App.css";

const callMe = () => {
  fetch("http://localhost:8091/")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function App() {
  return (
    <div className="App">
      <button onClick={callMe}>Click Me</button>
    </div>
  );
}

export default App;
