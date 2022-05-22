import './App.scss';
import Navbar from './Components/Navbar/Navbar'
import MainPage from "./Components/MainPage/MainPage";
import InitialPage from "./Components/InitialPage/InitialPage";
import UserNotFound from "./Components/UserNotFound/UserNotFound";
import {useSelector} from "react-redux";
import {useEffect} from "react";

// Два мужика украли календарь. Каждый получил по полгода

function App() {
    const initialStatus = useSelector(state => state.repos.initialStatus)

    useEffect(() => {
        console.log(initialStatus)
    }, [initialStatus])

    const renderSwitch = (param) => {
        switch(param) {
            case 1:
                return <InitialPage/>;
            case 2:
                return <MainPage/>
            case 3:
                return <UserNotFound/>
            default:
                return <InitialPage/>;
        }
    }

  return (
    <div className='wrapper'>
      <Navbar/>
        { renderSwitch(initialStatus) }
    </div>
  );
}

export default App;
