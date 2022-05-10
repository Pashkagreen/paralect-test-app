import './App.scss';
import {useState, useEffect} from "react";
import Navbar from './Components/Navbar/Navbar'
import MainPage from "./Components/MainPage/MainPage";
import InitialPage from "./Components/InitialPage/InitialPage";
import UserNotFound from "./Components/UserNotFound/UserNotFound";

function App() {

  return (
    <div className='wrapper'>
      <Navbar/>
        <MainPage/>
    </div>
  );
}

export default App;
