import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({galleryItems, likePhoto}) {
    return (
        <ul>
            {
                galleryItems.map(galleryItems => {
                  return <GalleryItem key={galleryItems.id} galleryItems={galleryItems} likePhoto={likePhoto}/>

                }
             )
            }
     </ul>
    
     )
}

export default GalleryList;