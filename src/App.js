import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react';

import UserContext from './hooks/UserContext'

//layouts
import Navbar from './layout/navbar/Navbar';

//pages
import CreateUser from './pages/CreateUser/CreateUser'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import CreatePost from './pages/CreatePost/CreatePost'
import MyPosts from './pages/MyPosts/MyPosts';

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
                          <Route path="/post/create" element={<CreatePost/>} />
                          <Route path="/post/myposts" element={<MyPosts/>} />
                    </Routes>
            </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
