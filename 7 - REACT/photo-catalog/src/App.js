import { useEffect, useState } from "react";
import "./App.css";
import { MyPhotos } from "./pages/MyPhotos";
import { SearchPhotos } from "./pages/SearchPhotos";

function App() {
  const storedFavourites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [favorites, setFavourites] = useState(storedFavourites);

  const [showingPage, setShowingPage] = useState("search-photos");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavourites = (photoToAdd) => {
    const photoExist = favorites.find((photo) => photo.id === photoToAdd);
    if (!photoExist) setFavourites([...favorites, photoToAdd]);
  };

  const removeFromFavourites = (photoToRemove) => {
    const favoritesFiltered = favorites.filter(
      (photo) => photo.id !== photoToRemove.id
    );
    setFavourites(favoritesFiltered);
  };

  return (
    <>
      <header>
        <h1>Photo catalog</h1>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  setShowingPage("my-photos");
                }}
              >
                My photos
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowingPage("search-photos");
                }}
              >
                Search new photos
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {showingPage === "search-photos" && (
          <SearchPhotos addToFavourites={addToFavourites} />
        )}
        {showingPage === "my-photos" && (
          <MyPhotos
            favorites={favorites}
            removeFromFavourites={removeFromFavourites}
          />
        )}
      </main>
      <footer>Hack a Boss 2022@</footer>
    </>
  );
}

export default App;
