import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} setToggle={setToggle} />

    </>
  );
}

export default App;
