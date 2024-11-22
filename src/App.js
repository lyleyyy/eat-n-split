import logo1 from "./assets/images/ppl1.jpg";
import logo2 from "./assets/images/ppl2.jpg";
import logo3 from "./assets/images/ppl3.jpg";
import "./App.css";

const friends = [
  { img: logo1, name: "Clark", balance: -7 },
  { img: logo2, name: "Sarah", balance: 20 },
  { img: logo3, name: "Anthony", balance: 0 },
];

function App() {
  return (
    <div className="App">
      <FriendsList />
    </div>
  );
}

function FriendsList() {
  return (
    <>
      <div className="friends-list">
        {friends.map((fr) => (
          <Friend
            key={Math.random().toString()}
            img={fr.img}
            name={fr.name}
            balance={fr.balance}
          />
        ))}
      </div>
      <Button>Add friend</Button>
    </>
  );
}

function Friend({ img, name, balance }) {
  return (
    <div className="friend">
      <img className="icon" src={img} alt={name} />
      <div className="friend-name-description">
        <h3>{name}</h3>
        <p>
          {balance > 0
            ? `${name} owes you ${balance}€`
            : balance < 0
            ? `You owe ${name} ${balance}$`
            : `You and ${name} are even`}
        </p>
      </div>
      <Button>Select</Button>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

export default App;
