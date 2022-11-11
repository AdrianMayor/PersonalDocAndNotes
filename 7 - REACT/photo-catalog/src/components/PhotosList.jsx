import { Photo } from "./Photo";

export const PhotosList = ({
  photos,
  addToFavourites,
  removeFromFavourites,
}) => {
  return (
    <ul className="photos-list">
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <Photo
              photo={photo}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
            ></Photo>
          </li>
        );
      })}
    </ul>
  );
};
