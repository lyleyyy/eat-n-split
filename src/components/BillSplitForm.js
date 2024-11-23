import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function BillSplitForm({ selectedFriendId, friendsList }) {
  const { name, balance } = friendsList.find(
    (friend) => friend.id === selectedFriendId
  );
  const [billValue, setBillValue] = useState(0);
  const [yourExp, setYourExp] = useState(0);
  const [payer, setPayer] = useState("You");

  const handleBillValue = (e) => {
    setBillValue(+e.target.value);
  };

  const handleYourExp = (e) => {
    setYourExp(+e.target.value);
  };

  const handlePayer = (e) => {
    setPayer(e.target.value);
  };

  const handleCalBalance = (e) => {
    e.preventDefault();
    // if (payer === "You") balance = balance + (billValue - yourExp);
  };

  return (
    <div className="bill-split-form-container">
      <h2>split a bill with {name}</h2>
      <form className="bill-split-form" onSubmit={handleCalBalance}>
        <Input
          emoji="💰"
          text="Bill value"
          type="number"
          onChange={handleBillValue}
        />
        <Input
          emoji="🧍‍♀️"
          text="Your expense"
          type="number"
          onChange={handleYourExp}
        />
        <Input
          emoji="👭"
          text={`${name}'s expense`}
          type="number"
          value={(billValue - yourExp).toString()}
        />
        <Input
          emoji="🤑"
          text="Who is paying the bill?"
          type="select"
          optionText={name}
          onChange={handlePayer}
        />
        <Button>Split bill</Button>
      </form>
    </div>
  );
}
