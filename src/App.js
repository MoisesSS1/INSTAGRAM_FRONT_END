import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react';

import UserContext from './hooks/UserContext'


//pages
import CreateUser from './pages/CreateUser/CreateUser'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';

//layouts
import Navbar from './layout/navbar/Navbar';

function App() {

  const [auth,setAuth]= useState(false)

  return (

    <UserContext.Provider value={[auth,setAuth]}>
            <BrowserRouter>
              <Navbar/>
                    <Routes>
                      
                          <Route path="/" element={<Home/>} />
                          <Route path="/user/create" element={<CreateUser/>} />                    
                          <Route path="/posts" element={<Posts/>} />
                          <Route path="/post/create" element={<Posts/>} />
                          <Route path="/post/myposts" element={<Posts/>} />
                          <Route path="/user/perfil" element={<Posts/>} />
                    </Routes>
            </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
