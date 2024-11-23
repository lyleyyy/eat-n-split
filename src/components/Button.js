export default function Button({ className = null, onClick, children }) {
  const style = { height: "35px" };

  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
