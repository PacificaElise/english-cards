import React from 'react';
import { Routes, Route } from "react-router-dom";

import Tags from './components/Tags/Tags';
import CardsSlider from './components/CardsSlider/CardsSlider';
import Exam from './components/Exam/Exam';
import List from './components/List/List';
import Homepage from './components/Homepage/Homepage';

import Layout from './components/Layout/Layout';


function App() {
  return (
    <Routes>
      <Route path='*' element={<Layout/>}>
        <Route path='english-cards' element={<Homepage/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='cards' element={<CardsSlider/>}/>
        <Route path='tags' element={<Tags/>}/>
        <Route path='exam' element={<Exam/>}/>
      </Route>
    </Routes>
  )
}
export default App;
