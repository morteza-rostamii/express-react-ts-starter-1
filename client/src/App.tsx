import Layout from 'components/Layout';
import AuthGuard from 'modules/auth/guards/AuthGuard';
import Home from 'pages/Home';
import Register from 'pages/Register';
import React from 'react';
import { Route, Routes } from 'react-router';
//import logo from './logo.svg';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>

        <Route 
        path='/'
        element={<AuthGuard><Home/></AuthGuard>}>
        </Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/cat' element={<></>}></Route>
        <Route path='/ss' element={<></>}></Route>

      </Route>
    </Routes>
    </>
  );
}

export default App;
