const Suggestion = ({ Name, handleButtonClick }) => {
  return (
    <>
      <button value={Name} onClick={handleButtonClick}>{Name}</button>
    </>
  );
};

export default Suggestion;
