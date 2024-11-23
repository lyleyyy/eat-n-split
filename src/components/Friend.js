import Button from "./Button";

export default function Friend({
  id,
  img,
  name,
  balance,
  selectedFriendId,
  onClick,
}) {
  return (
    <div
      id={id}
      className={`friend-item ${selectedFriendId === id ? "selected" : ""}`}
    >
      <div className="friend">
        <img className="icon" src={img} alt={name} />
        <div className="friend-name-description">
          <h3>{name}</h3>
          <p className={`${balance > 0 ? "green" : balance < 0 ? "red" : ""}`}>
            {balance > 0
              ? `${name} owes you ${balance}€`
              : balance < 0
              ? `You owe ${name} ${balance}€`
              : `You and ${name} are even`}
          </p>
        </div>
      </div>
      <Button onClick={onClick}>
        {selectedFriendId === id ? "Close" : "Select"}
      </Button>
    </div>
  );
}
