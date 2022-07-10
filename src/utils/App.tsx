import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button variant="primary" size="lg">
        text me
      </Button>
    </div>
  );
}

export default App;
