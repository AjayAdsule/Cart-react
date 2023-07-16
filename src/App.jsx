import React from 'react'
import Header from './Componenet/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Componenet/Home'
import Cart from './Componenet/Cart'


const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
     
    </React.Fragment>
  )
}

export default App
