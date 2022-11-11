import { services } from "../../services";

export const NewPost = ({ fullList, setFullList, setLoading }) => {
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const item = {
      title: e.target.elements.postTitle.value,
      body: e.target.elements.postBody.value,
      userId: e.target.elements.postUserId.value,
      id: fullList.length + 1,
    };

    const response = await services.sendPost(item);
    if (response.ok) setFullList([item, ...fullList]);
    setLoading(false);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="postTitle">Title</label>
          <input type="text" id="postTitle" name="postTitle"></input>
        </li>
        <li>
          <label htmlFor="postBody">Body</label>
          <input type="textarea" id="'postBody" name="postBody"></input>
        </li>
        <li>
          <label htmlFor="postUserId">userId</label>
          <input type="number" id="postUserId" name="postUserId"></input>
        </li>
      </ul>
      <button>Send</button>
    </form>
  );
};
