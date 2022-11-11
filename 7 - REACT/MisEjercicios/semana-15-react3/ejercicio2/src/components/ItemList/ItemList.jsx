import { useEffect } from "react";
import SpinnerIcon from "../../assets/icons/loadingIcon.svg";
import { services } from "../../services";

export const ItemList = ({ fullList, setFullList, isLoading, setLoading }) => {
  useEffect(() => {
    setLoading(true);

    const loadData = async () => {
      const data = await services.getList();
      setFullList(data);
      setLoading(false);
    };

    loadData();
  }, [setFullList, setLoading]);

  return (
    <>
      {isLoading && <img src={SpinnerIcon} alt="loadingIcon"></img>}
      <ul>
        {fullList.map((file, index) => (
          <li key={index}>
            <dt style={{ fontWeight: "bold" }}>{file.title} </dt>
            <dt>{file.body}</dt>
            <br></br>
          </li>
        ))}
      </ul>
    </>
  );
};
