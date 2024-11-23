import Button from "./Button";
import Input from "./Input";

export default function AddFriendForm({ onSubmit, onChangeName, onChangeURL }) {
  return (
    <form className="add-friend-form" onSubmit={onSubmit}>
      <Input
        emoji="👭"
        text="Friend name"
        type="text"
        onChange={onChangeName}
      />
      <Input emoji="🌄" text="Image URL" type="text" onChange={onChangeURL} />
      <Button>Add</Button>
    </form>
  );
}
