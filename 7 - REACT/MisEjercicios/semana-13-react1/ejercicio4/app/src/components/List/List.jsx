import "./List.css";
const List = ({ data, render }) => {
  return <ul className="listComponent">{data.map(render)}</ul>;
};

export default List;
