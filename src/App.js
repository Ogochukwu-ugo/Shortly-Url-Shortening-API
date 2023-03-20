import React, { Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import AppRoutes from './Router';


const LOGIN = "/login"
const SIGNUP = "/signup"

function App() {
  const [isOpen, setIsOpen] =useState(false);
  const location = useLocation(); // move useLocation inside App function
  const { pathname } = location;

  const handleOpen =() => setIsOpen(!isOpen);

  return (
    <>
    {!(pathname === LOGIN || pathname === SIGNUP) && (
        <Header {...{isOpen, handleOpen}}/>
    )}
      
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

