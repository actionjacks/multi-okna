import { useState } from "react";
import Home from "./components/Home/index";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [selected, setSelected] = useState(0);
  const [disableBtns, setDisableBtns] = useState(false);

  //add settimeout to disable btn when animation play
  const handleClick = (e) => {
    setDisableBtns(true);

    const btnValue = parseInt(e.target.value - 1);
    setSelected(btnValue);
    activeNavbarBtns();
  };

  const activeNavbarBtns = () => {
    setTimeout(() => {
      setDisableBtns(false);
    }, 1500);
  };

  return (
    <div className="App">
      <Navbar
        handleClick={handleClick}
        selected={selected}
        disableBtns={disableBtns}
        btnNumbers={["strona 1", "strona 2", "strona 3", "strona 4"]}
      />
      <Home selected={selected} />
    </div>
  );
}

export default App;
