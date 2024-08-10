import css from "./App.module.css";
import FriendList from "../FriendsList/FriendList";
import friends from "../../data/friends.json";

console.log(css);

export default function App() {
  return <FriendList friends={friends} />;
}
