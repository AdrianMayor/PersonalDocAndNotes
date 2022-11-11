import List from "../../components/List/List";
import usersData from "../../data/users.json";
import UserCard from "./UserCard/UserCard";
import "./UserList.css";

export const UserList = () => {
  return (
    <section className="userList">
      <List
        data={usersData}
        render={(user) => {
          return (
            <li key={user.login.uuid}>
              <UserCard user={user} />
            </li>
          );
        }}
      />
    </section>
  );
};
