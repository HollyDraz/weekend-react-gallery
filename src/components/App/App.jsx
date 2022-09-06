//import React from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






function App() {
const [galleryItems, setGalleryItems] =useState([]);


useEffect(() => {
  console.log('use effect -page load');
  fetchGalleryImages();

  
}, []);

const fetchGalleryImages = () => {
  axios({
    method: 'GET',
    url: '/gallery'
  }).then(response =>{
    setGalleryItems(response.data);
   //console.log("get test", response.data );
  }).catch(error =>{
    console.log(error);
    alert('something is wrong!');
  });
};


  const likePhoto = (galleryId) => {
    console.log(galleryId)
    axios({
      method: 'PUT',
      url: `gallery/like/${galleryId}`
    }).then(response =>{
      fetchGalleryImages();
    }).catch(error => {
        console.log(error);
        alert(':(')
    });
  };



  return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br/>
        <Container maxWidth="sm">
        <Card>
          <CardContent>
          <GalleryList galleryItems={galleryItems} likePhoto={likePhoto}/>
          </CardContent>
        </Card>
        </Container>
      </div>
    );

 

}

export default App;
