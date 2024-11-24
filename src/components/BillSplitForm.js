import Button from "./Button";
import Input from "./Input";

export default function BillSplitForm({
  selectedFriendId,
  friendsList,
  billValue,
  onChangeBillValue,
  onChangeYourExp,
  friendExpValue,
  onChangePayer,
  onSubmit,
}) {
  const { name } = friendsList.find((friend) => friend.id === selectedFriendId);

  return (
    <div className="bill-split-form-container">
      <h2>split a bill with {name}</h2>
      <form className="bill-split-form" onSubmit={onSubmit}>
        <Input
          emoji="💰"
          text="Bill value"
          type="number"
          value={billValue.toString()}
          onChange={onChangeBillValue}
        />
        <Input
          emoji="🧍‍♀️"
          text="Your expense"
          type="number"
          onChange={onChangeYourExp}
        />
        <Input
          emoji="👭"
          text={`${name}'s expense`}
          type="number"
          isfixed="true"
          value={friendExpValue}
        />
        <Input
          emoji="🤑"
          text="Who is paying the bill?"
          type="select"
          optionText={name}
          onChange={onChangePayer}
        />
        <Button>Split bill</Button>
      </form>
    </div>
  );
}
