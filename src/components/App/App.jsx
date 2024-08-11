// import css from "./App.module.css";

import friends from "../../data/friends.json";
import userData from "../../data/UserData.json";
import transactions from "../../data/transactions.json";

import FriendList from "../FriendsList/FriendList";
import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionHistory/transactions";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
