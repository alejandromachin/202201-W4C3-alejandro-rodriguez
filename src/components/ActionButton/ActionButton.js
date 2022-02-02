const ActionButton = ({ text, actionOnClick, class }) => {
  const action = (event) => {
    event.preventDefault();
    actionOnClick();
  };

  return (
    <a href={`${text}`} className={class} onClick={action}>
      {text}
    </a>
  );
};

export default ActionButton;
