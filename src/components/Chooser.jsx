import "../App.css";

const Chooser = ({choice, setChoice, choices}) => {

  const nextChoice = () => {
    setChoice((choice + 1) % choices.length);
  }

  return (
    <button className="filter-btn" onClick={nextChoice}>{choices[choice]}</button>
  );
};

export default Chooser;