import { useState } from "react";
import { PhotosList } from "../components/PhotosList";
import { SearchPhotosForm } from "../components/SearchPhotosForm";

export const SearchPhotos = ({ addToFavourites }) => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <section id="search-photos">
      <h2>SearchPhotos</h2>

      <SearchPhotosForm setPhotosList={setSearchResults}></SearchPhotosForm>
      {searchResults ? (
        <PhotosList
          photos={searchResults}
          addToFavourites={addToFavourites}
        ></PhotosList>
      ) : (
        <p>No Results</p>
      )}
    </section>
  );
};
