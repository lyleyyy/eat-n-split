import cloneDeep from "lodash/cloneDeep";
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

  //Bill Value Form
  const [billValue, setBillValue] = useState(0);
  const [yourExp, setYourExp] = useState(0);
  const [payer, setPayer] = useState("You");

  const handleBillValue = (e) => {
    setBillValue(+e.target.value);
  };

  const handleYourExp = (e) => {
    setYourExp(+e.target.value);
  };

  const handleFriendExp = () => {
    return (billValue - yourExp).toString();
  };

  const handlePayer = (e) => {
    setPayer(e.target.value);
  };

  const handleCalBalance = (e) => {
    e.preventDefault();
    const { name, balance } = friendsList.find(
      (friend) => friend.id === selectedFriendId
    );

    let newBalance;
    if (payer === "You") newBalance = balance + (billValue - yourExp);

    if (payer === name) newBalance = balance - (billValue - yourExp);

    const selectedFriendIndex = friendsList.findIndex(
      (friend) => friend.id === selectedFriendId
    );

    // const copyOfFriendsList = [...friendsList];
    // const deepCopyOfFriendsList = JSON.parse(JSON.stringify(friendsList));

    const deepCopyOfFriendsList = cloneDeep(friendsList);
    deepCopyOfFriendsList[selectedFriendIndex].balance = newBalance;

    setFriendsList(deepCopyOfFriendsList);
    setBillValue(0);
    setYourExp(0);
    setPayer("You");
    setSelectedFriendId(null);
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
          billValue={billValue}
          onChangeBillValue={handleBillValue}
          onChangeYourExp={handleYourExp}
          friendExpValue={handleFriendExp()}
          onChangePayer={handlePayer}
          onSubmit={handleCalBalance}
        />
      )}
    </div>
  );
}
