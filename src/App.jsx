import { useState } from 'react'
import './App.css'
import Home from './component/home';
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
     <h1 className='text-3xl font-bold underline'>Hello</h1>
    </>
  )
}

export default App
