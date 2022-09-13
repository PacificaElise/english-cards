import React from 'react';
import { Routes, Route } from "react-router-dom";

import Tags from './components/Tags/Tags';
import CardsSlider from './components/CardsSlider/CardsSlider';
import Training from './components/Training/Training';
import List from './components/List/List';
import Homepage from './components/Homepage/Homepage';

import Layout from './components/Layout/Layout';


function App() {
  return (
    <Routes>
      <Route path='*' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='list' element={<List/>}/>
        <Route path='cards' element={<CardsSlider/>}/>
        <Route path='tags' element={<Tags/>}/>
        <Route path='train' element={<Training/>}/>
      </Route>
    </Routes>
  )
}
export default App;
