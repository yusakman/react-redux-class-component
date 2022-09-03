
import './App.css';
import Home from './components/home';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
