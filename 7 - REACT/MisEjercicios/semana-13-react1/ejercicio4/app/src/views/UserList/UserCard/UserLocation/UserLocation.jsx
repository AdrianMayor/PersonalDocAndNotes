export const UserLocation = ({ children }) => {
  return (
    <div>
      <p>{children.state}</p>
      <p>{children.country}</p>
    </div>
  );
};
