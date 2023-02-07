import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import CardList from './components/CardList'
import Navs from './components/Navs';

const App = () => {
  const[posts , setPosts] = useState([]);
  const getAllPosts = async()=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    setPosts(res.data)
  }
  useEffect(()=>{getAllPosts()} , [])
  return (
  <>
     <Navs/>
   <Routes>
    <Route path='/' element={  <CardList posts={posts}/>}/>
    <Route path='/posts/:id' element={<CardDetails/>}/>
   </Routes>
  </>
  
  )
}

export default App
