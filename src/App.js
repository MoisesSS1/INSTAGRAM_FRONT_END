import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//pages
import CreateUser from './pages/CreateUser/CreateUser'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';


function App() {
  return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/user/create" element={<CreateUser/>} />
            <Route path="/user/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
