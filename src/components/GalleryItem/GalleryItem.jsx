import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
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
        </CardContent>
        <CardActions>
        <p key={galleryItems.id}> 
        <IconButton size=" extra small" variant="contained" onClick={() => likePhoto(galleryItems.id)}> 
        <FavoriteBorderIcon/>
        </IconButton>  
        likes: {galleryItems.likes}
        </p> 
        </CardActions>
        </Card> 
        </Grid> 
        
    )

}
export default GalleryItem;