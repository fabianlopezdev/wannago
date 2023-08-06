export const YesButton = ({ handleClick }) => {
  return (
    <button
      className='option-button important'
      onClick={handleClick}
    >
      I wannaGo!
    </button>
  );
};

export const NoButton = ({ handleClick }) => {
  return (
    <button
      className='option-button'
      onClick={handleClick}
    >
      I can't
    </button>
  );
};

export const MaybeButton = ({ handleClick }) => {
  return (
    <button
      className='option-button'
      onClick={handleClick}
    >
      Maybe
    </button>
  );
};




