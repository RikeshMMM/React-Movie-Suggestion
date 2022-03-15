const Suggestion = ({ Name, handleButtonClick }) => {
  return (
    <div className="suggestions__item">
      <button value={Name} onClick={handleButtonClick}>{Name}</button>
    </div>
  );
};

export default Suggestion;
