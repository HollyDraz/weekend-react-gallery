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

        <p key={galleryItems.id}> 
         <button onClick={() => likePhoto(galleryItems.id)}>Like {galleryItems.likes}</button> 
         likes: {galleryItems.likes}
        </p>  
        </div>   
        
    )

}
export default GalleryItem;