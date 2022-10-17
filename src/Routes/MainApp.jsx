import React from 'react'
import { Link, Navigate, Routes, Route, NavLink } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { ProductsPage } from './ProductsPage'

export const MainApp = () => {
  return (
    <div>
        <h1>MainApp</h1>
        <hr />

        <Link to="/"> Home </Link>
        <Link to="about"> About </Link>
        <Link to="login"> Login </Link>

       <Routes>

         <Route path="/" element= { <HomePage />}></Route>
         <Route path="login" element= { <LoginPage />}></Route>
         <Route path="about" element= { <AboutPage />}></Route>
         <Route path="/*" element= { <Navigate />}></Route>

       </Routes>

       <NavLink to="products/3"> Product ID </NavLink>

       <Routes>

          <Route path="products">
          <Route path=":id" element={ <ProductsPage /> } />
          </Route>
       </Routes>


    </div>

  )
}
