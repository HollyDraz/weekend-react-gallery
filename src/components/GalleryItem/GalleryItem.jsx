import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function GalleryItem ({galleryItems, likePhoto} ){
    
    const [toggle, setToggle] = useState(true);
    

   
    return(
        <Grid container spacing={2}>
        <Card style={{margin: 10}}>
            <CardContent>
        {
             toggle ? (
               
                <img onClick={() => setToggle(!toggle)} src={galleryItems.path}/>
            ): (
              
                <p onClick={() => setToggle(!toggle)}> Description: {galleryItems.description} </p>
            )
        }

        <p key={galleryItems.id}> 
        <IconButton size=" extra small" variant="contained" onClick={() => likePhoto(galleryItems.id)}> 
        <FavoriteBorderIcon/>
        </IconButton>  
        likes: {galleryItems.likes}
        </p>  
        </CardContent>
        </Card> 
        </Grid> 
        
    )

}
export default GalleryItem;