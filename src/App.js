import './App.scss';
import {useState, useEffect} from "react";
import Navbar from './Components/Navbar/Navbar'
import MainPage from "./Components/MainPage/MainPage";
import InitialPage from "./Components/InitialPage/InitialPage";
import UserNotFound from "./Components/UserNotFound/UserNotFound";
import {useSelector} from "react-redux";

function App() {
    const repos = useSelector(state => state.repos.repos)
    const users = useSelector(state => state.repos.users)

  return (
    <div className='wrapper'>
      <Navbar/>
        { repos?.length === undefined || repos === [] || repos?.length === 0 ?
            <InitialPage/> : <MainPage/>
        }
    </div>
  );
}

export default App;
