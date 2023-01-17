import React, {lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Header from './components/header';

const RegistryView = lazy(()=>import('./pages/registry'))
const SpaceRecords = lazy(()=>import('./pages/spaceRecords'))

function App() {
  return (
  <>
  <React.Suspense fallback={'loading'}>
    <Header/>
   <Routes>
    <Route path="/registry/records/:orgId/:spaceId" element={<SpaceRecords/>}/>
    <Route path="/registry/view/:orgId" element={<RegistryView/>}/>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </React.Suspense>
  </>
  )}

export default App
