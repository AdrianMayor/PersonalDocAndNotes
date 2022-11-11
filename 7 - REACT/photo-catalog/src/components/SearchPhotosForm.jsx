export const SearchPhotosForm = ({ setPhotosList }) => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const query = event.target.elements.search.value;

      const searchParams = new URLSearchParams();

      searchParams.append("query", query);
      searchParams.append("locale", "es-ES");
      searchParams.append("per_page", 80);

      const response = await fetch(
        `https://api.pexels.com/v1/search?${searchParams.toString()}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      const body = await response.json();

      setPhotosList(body.photos);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">What do you want to see?:</label>
      <input id="search" name="search" type="search" />

      <button>Search</button>
    </form>
  );
};
