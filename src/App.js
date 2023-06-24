import './App.css';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import { createContext, useState } from 'react';
import Protected from './utils/Protected';
import Register from './components/Register';

export const signContext=createContext()

function App() {
  const [issignedin,setIssignedin]=useState(true);

  return (
    <>
    <signContext.Provider value={{issignedin,setIssignedin}}>
    <BrowserRouter basename=''>
    <Routes>
      <Route path='/' element={
        <>
        <Header/>
        <Home/>
        </>
      }></Route>
      <Route path='/courses' element={
        <Protected>
          <>
        <Header/>
        <Courses/>
        </>
        </Protected>
      }></Route>
      <Route path='/aboutus' element={
        <>
        <Header/>
        <AboutUs/>
        </>
      }></Route>
      <Route path='/login' element={
        <>
        <Header/>
        <Login/>
        </>
      }></Route>
      <Route path='/register' element={
        <>
        <Header/>
        <Register/>
        </>
      }></Route>
    </Routes>
    </BrowserRouter>
    </signContext.Provider>
    </>
  );
}

export default App;
