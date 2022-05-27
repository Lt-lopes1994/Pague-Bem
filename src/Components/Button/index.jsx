import "./style.css";

export default function BaseButton({ name, handleClick }) {
  return (
    <div>
      <button className="buttonBase" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
}