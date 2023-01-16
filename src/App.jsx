import React, {lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
  <>
  <React.Suspense fallback={'loading'}>
    <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </React.Suspense>
  </>
  )}

export default App
