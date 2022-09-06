import {useState} from 'react';


function GalleryItem ({galleryItems, likePhoto} ){
    
    const [toggle, setToggle] = useState(true);
    

   
    return(
        <div>

        {
             toggle ? (
               
                <img onClick={() => setToggle(!toggle)} src={galleryItems.path}/>
            ): (
              
                <p onClick={() => setToggle(!toggle)}> Description: {galleryItems.description} </p>
            )
        }

        <li key={galleryItems.id}> 
         <button onClick={() => likePhoto(galleryItems.id)}>Like {galleryItems.likes}</button> 
         likes: {galleryItems.likes}
        </li>  
        </div>   
        
    )

}
export default GalleryItem;