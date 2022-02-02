const ActionButton = ({ text, actionOnClick }) => {
  const action = (event) => {
    event.preventDefault();
    actionOnClick();
  };

  return (
    <a href={`${text}`} className={text} onClick={action}>
      {text}
    </a>
  );
};

export default ActionButton;
