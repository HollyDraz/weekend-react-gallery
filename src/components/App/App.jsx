import React from 'react';
import './App.css';
import axios from 'axios';

const galleryItems = [];

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <br/>
        <p>
          testing  {galleryItems[1]}
        </p>
        <img src="images/ghosts.jpg"/>
        <br/>
        <img src="images/holly.JPG"/>
        <br/>
        <img src="images/pup.jpeg"/>
        <br/>
        <img src="images/smilecoffee.jpg"/>


      </div>
    );
}

export default App;
