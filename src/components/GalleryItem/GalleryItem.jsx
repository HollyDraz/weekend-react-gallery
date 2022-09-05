import {useState} from 'react'


function GalleryItemComponent ({galleryItems}){
    
    const [toggle, setToggle] = useState(false);
    

   
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
        <p><button>Like me </button> likes: {galleryItems.likes}</p>
        </li>  
        </div>   
        
    )

}
export default GalleryItemComponent;