import { useState } from "react";
import Home from "./components/Home/index";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [selected, setSelected] = useState(0);

  //add settimeout to disable btn when animation play
  const handleClick = (e) => {
    const btnValue = parseInt(e.target.value - 1);
    setSelected(btnValue);
  };

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />
      <Home selected={selected} />
    </div>
  );
}

export default App;
