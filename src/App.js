import { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "../src/pages/Main/Main";
import Post from "./components/Post/Post";
import useAuth from "./hooks/useAuth";
import UserProvider from "./context/userProvider";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const AppContext = createContext(null)

function App() {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [togglePost, setTogglePost] = useState(false);
  const { user, errror, setUser } = useAuth()

  const handlePost = () => {
    setTogglePost(!togglePost)
  }
  const handleHamburger = () => {
    setToggleHamburger(!toggleHamburger)
  }
  const provideValue = { handlePost, handleHamburger, setUser, setTogglePost, user, errror, togglePost, toggleHamburger }



  return (
    <>
      <AppContext.Provider value={{ ...provideValue }}>
        <div className={`${togglePost && "active"}`}>
          <Header />
          <UserProvider>
            <Main />
          </UserProvider>
        </div>
        <Post />
        <ToastContainer />
      </AppContext.Provider>
    </>
  );
}

export default App;
