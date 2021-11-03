import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Navigation/Logo/Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {<Logo/>
          /*<ImageLinkForm/>
          <FaceRecognition/>*/}
    </div>
  );
}

export default App;