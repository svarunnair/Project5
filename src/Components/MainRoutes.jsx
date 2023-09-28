import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import HomePage from '../Pages/HomePage'

function MainRoutes() {

  
  return (
    <div>

      <Routes>

        <Route path='/'element={<Signup/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/signin'element={<Signin/>}/>
        <Route path='/home'element={<HomePage/>}/>

      </Routes>



    </div>
  )
}

export default MainRoutes