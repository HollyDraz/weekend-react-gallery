function GalleryItemComponent ({galleryItems}){
    return(
        <li key={galleryItems.id}> 
        <img src={galleryItems.path} />
        Description: {galleryItems.description} 
        likes: {galleryItems.likes}
        </li>     
    )

}
export default GalleryItemComponent;