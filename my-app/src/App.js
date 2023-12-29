import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import './app1.css'

import GuestGreeting from './condition/GuestGreeting';
import UserGreeting from './condition/UserGreeting';
import Facebook from './facebookform';
import Api from './effect';
import Forms from './form'
import App2 from './app2'
import App3 from './App3';
import Incdec from './count';
import Facebook1 from './facebookform2';
import { Component1 } from './content/Component1';
import Demo from './Memo/demo';
import Input from './task';
import Portfolio from './portfolio/portfolio';
import Home from './portfolio/Home';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import Projects from './portfolio/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
   
  
  // const [value,create] = useState(true)
  // console.log(value,"Rathna")
  
  
  return (
    <div>

{/* <BrowserRouter>
   <Routes>
    <Route path = '/' element = {<Portfolio/>}>
    <Route index element = {<Home/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/Projects' element = {<Projects/>}/>
    </Route>
   </Routes>
   </BrowserRouter>  */}
      {/* <Input/> */}
      {/* <Demo/> */}
      {/* <Component1/> */}
      {/* {
value ? <GuestGreeting/> : <UserGreeting/>
      } */}
      {/* <Forms/> */}
      {/* { value?<Facebook account = {create}/>: <Facebook1/>} */}
      {/* <Api/> */}
      
      
     
    </div>
 
  )
}
export default App