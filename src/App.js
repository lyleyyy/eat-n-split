import { useState } from "react";
import BillSplitForm from "./components/BillSplitForm";
import FriendsList from "./components/FriendsList";
import friends from "./data/friends";
import "./App.css";

export default function App() {
  const [friendsList, setFriendsList] = useState(friends);
  const [selectedFriendId, setSelectedFriendId] = useState(null);

  const handleSelect = (e) => {
    const clickedId = e.target.closest(".friend-item").id;

    if (selectedFriendId === clickedId) setSelectedFriendId(null);

    if (selectedFriendId !== clickedId) setSelectedFriendId(clickedId);
  };

  return (
    <div className="App">
      <FriendsList
        friendsList={friendsList}
        setFriendsList={setFriendsList}
        selectedFriendId={selectedFriendId}
        handleSelect={handleSelect}
      />
      {selectedFriendId && (
        <BillSplitForm
          selectedFriendId={selectedFriendId}
          friendsList={friendsList}
        />
      )}
    </div>
  );
}
