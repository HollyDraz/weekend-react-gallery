import GalleryItemComponent from "../GalleryItem/GalleryItem";

function GalleryListComponent ({galleryItems}) {
    return (
        <ul>
            {
                galleryItems.map(galleryItems => {
                  return <GalleryItemComponent galleryItems={galleryItems}/>

                }
             )
            }
     </ul>
     );
}

export default GalleryListComponent;