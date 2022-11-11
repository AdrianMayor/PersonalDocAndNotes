import IsAdult from "./IsAdult/IsAdult";
import "./UserCard.css";
import UserImg from "./UserImg/UserImg";
import { UserLocation } from "./UserLocation/UserLocation";

const UserCard = ({ user }) => {
  return (
    <article className="userCard">
      <UserImg>{user.picture.large}</UserImg>
      <h1>{user.login.username}</h1>
      <UserLocation>{user.location}</UserLocation>
      <IsAdult age={user.dob.age}></IsAdult>
    </article>
  );
};

export default UserCard;
