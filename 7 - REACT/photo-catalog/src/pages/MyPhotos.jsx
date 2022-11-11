import { PhotosList } from "../components/PhotosList";

export const MyPhotos = ({
  favorites,

  removeFromFavourites,
}) => {
  return (
    <section>
      <h2>My Photos</h2>
      {favorites ? (
        <PhotosList
          photos={favorites}
          removeFromFavourites={removeFromFavourites}
        />
      ) : (
        <p>No Favourite Photos</p>
      )}
    </section>
  );
};
