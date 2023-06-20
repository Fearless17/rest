import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import Registr from './components/Registr/Registr';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import RestarauntPage from './pages/RestarauntPage/RestarauntPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {
  return (
    <div className="App">
      {/* <Registr/> */}
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/restaraunt' element={<RestarauntPage />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
