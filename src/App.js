import React from 'react';
import classes from './App.css';
import {
  Footer,
  Blog,
  Possibility,
  Feature,
  WhatGPT3,
  Header,
} from './containers';

import { Cta, Brand, NavBar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
