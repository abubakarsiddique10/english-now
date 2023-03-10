import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Main from "../src/pages/Main/Main";
import Post from "./components/Post/Post";
import auth from "./firebase.init";
import { onAuthStateChanged } from "firebase/auth";

export const HandlerContext = createContext(null)

function App() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [togglePost, setTogglePost] = useState(false);


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user)
    } else {
      console.log('no')
    }
  })

  const handlePost = () => {
    setTogglePost(!togglePost)
  }
  const handleHamburger = () => {
    setToggleHamburger(!toggleHamburger)
  }
  const provideValue = { handlePost, handleHamburger, togglePost, toggleHamburger }

  return (
    <>
      <HandlerContext.Provider value={{ ...provideValue }}>
        <div className={`${togglePost && "active"}`}>
          <Header />
          <Main />
        </div>
        <Post />
      </HandlerContext.Provider>
    </>
  );
}

export default App;
