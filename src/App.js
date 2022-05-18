import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import NavBar from './shared/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
