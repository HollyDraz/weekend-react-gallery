function GalleryListComponent ({galleryItems}) {
    return (
        <ul>
            {
                galleryItems.map(galleryItems =>
                 <li key={galleryItems.id}> 
                    <img src={galleryItems.path} />
                    {galleryItems.description} 
                    likes: {galleryItems.likes}
                    </li>     
             )
            }
     </ul>
     );
}

export default GalleryListComponent;