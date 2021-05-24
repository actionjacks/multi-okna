import NavbarMobile from "./components/navbar/NavbarMobile";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes";

function App() {
  return (
    <div
      className="App"
      id="outer-container"
      style={{ height: "200vh", overflow: "hidden" }}
    >
      <NavbarMobile
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <div id="page-wrap">
        <Navbar />
      </div>
      <Routes />
    </div>
  );
}

export default App;
