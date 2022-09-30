type Props = { handleClick: any };

export const YesButton = ({ handleClick }: Props) => {
  return (
    <button
      className='button important'
      onClick={handleClick}
    >
      I wannaGo!
    </button>
  );
};

export const NoButton = ({ handleClick }: Props) => {
  return (
    <button
      className='button'
      onClick={handleClick}
    >
      I can't
    </button>
  );
};

export const MaybeButton = ({ handleClick }: Props) => {
  return (
    <button
      className='button'
      onClick={handleClick}
    >
      Maybe
    </button>
  );
};
