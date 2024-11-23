import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import Friend from "./Friend";

export default function FriendsList({
  friendsList,
  setFriendsList,
  selectedFriendId,
  handleSelect,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendImgURL, setNewFriendImgURL] = useState("");

  const handleNewFriendName = (e) => {
    setNewFriendName(e.target.value);
  };

  const handleNewFriendImgURL = (e) => {
    setNewFriendImgURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      id: Math.random().toString(),
      img: newFriendImgURL,
      name: newFriendName,
      balance: 0,
    };

    setFriendsList([...friendsList, newFriend]);
    setIsFormOpen(false);
  };

  const handleOpenAddFriendForm = () => {
    setIsFormOpen(() => !isFormOpen);
  };

  return (
    <div className="friends-list-controller">
      <div className="friends-list">
        {friendsList.map((fr) => (
          <Friend
            key={Math.random().toString()}
            id={fr.id}
            img={fr.img}
            name={fr.name}
            balance={fr.balance}
            selectedFriendId={selectedFriendId}
            onClick={handleSelect}
          />
        ))}
      </div>
      {isFormOpen && (
        <AddFriendForm
          onSubmit={handleSubmit}
          onChangeName={handleNewFriendName}
          onChangeURL={handleNewFriendImgURL}
        />
      )}
      <Button className={"addFriendBtn"} onClick={handleOpenAddFriendForm}>
        {isFormOpen ? "Close" : "Add friend"}
      </Button>
    </div>
  );
}
