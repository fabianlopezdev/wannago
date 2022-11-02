export const YesButton = ({ handleClick }) => {
  return (
    <button
      className='optionButton important'
      onClick={handleClick}
    >
      I wannaGo!
    </button>
  );
};

export const NoButton = ({ handleClick }) => {
  return (
    <button
      className='optionButton'
      onClick={handleClick}
    >
      I can't
    </button>
  );
};

export const MaybeButton = ({ handleClick }) => {
  return (
    <button
      className='optionButton'
      onClick={handleClick}
    >
      Maybe
    </button>
  );
};




