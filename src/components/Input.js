export default function Input({
  emoji,
  text,
  type,
  onChange,
  optionText,
  value,
}) {
  return (
    <div className="input">
      <label>
        {emoji} {text}
      </label>
      {type === "select" && (
        <select onChange={onChange}>
          <option>You</option>
          <option>{optionText}</option>
        </select>
      )}
      {type !== "select" && !value && <input type={type} onChange={onChange} />}
      {type !== "select" && value && (
        <input
          className="input-lose-focus"
          style={{ backgroundColor: "#ffe8cc" }}
          type={type}
          value={value}
          readOnly
        />
      )}
    </div>
  );
}
