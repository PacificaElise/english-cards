import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Tags from './components/Tags/Tags';
import CardsSlider from './components/CardsSlider/CardsSlider';
import Exam from './components/Exam/Exam';
import List from './components/List/List';
import Homepage from './components/Homepage/Homepage';

import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='english-cards' element={<Homepage/>}/>
        <Route path='logo' element={<Navigate to="/english-cards" replace/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='cards' element={<CardsSlider/>}/>
        <Route path='tags' element={<Tags/>}/>
        <Route path='exam' element={<Exam/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
export default App;
