import { useEffect, useState } from "react";
import { getData, getDataFetch } from "../../services/files";

export function ShowFiles() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();

      setFiles(data);
    };
    loadData();
  }, []);

  console.log(files);

  return (
    <ul>
      {files.map((file, index) => (
        <img key={index} src={file.url} alt={file.name}></img>
      ))}
    </ul>
  );
}
