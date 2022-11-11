import { useState } from "react";
import { postData, postDataFetch } from "../../services/files";

export function UploadFiles() {
  const [file, setFile] = useState();

  const uploadFile = async (e) => {
    e.preventDefault();

    await postData({ file });
  };

  return (
    <form onSubmit={uploadFile}>
      <label htmlFor="fileToUpload">Select a file:</label>
      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        onChange={(event) => setFile(event.target.files[0])}
      ></input>
      <button>Send</button>
    </form>
  );
}
