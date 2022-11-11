export const Photo = ({ photo, addToFavourites, removeFromFavourites }) => {
  return (
    <>
      <img src={photo.src.small} alt="resultado busqueda"></img>
      {addToFavourites && (
        <button onClick={() => addToFavourites(photo)}>
          Add to favourites
        </button>
      )}
      {removeFromFavourites && (
        <button onClick={() => removeFromFavourites(photo)}>Remove</button>
      )}
    </>
  );
};
