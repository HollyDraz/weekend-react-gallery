//import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryListComponent from '../GalleryList/GalleryList';
//import { use } from '../../../server/routes/gallery.router';
//import galleryItems from '../GalleryItem';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function App() {
const [galleryItems, setGalleryItems] =useState([]);

useEffect(() => {
  console.log('use effect -page load');
  fetchGalleryImages();
}, []);

const fetchGalleryImages = () => {
  axios({
    method: 'GET',
    url: 'gallery'
  }).then(response =>{
    setGalleryItems(response.data);
   //console.log("get test", response.data );
  }).catch(error =>{
    console.log(error);
    alert('something is wrong!')
  });
}
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br/>
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', width: '50vh'  }} />

        
        <GalleryListComponent galleryItems={galleryItems}/>

        </Container>
       </React.Fragment>
      </div>
    );

 

}

export default App;
