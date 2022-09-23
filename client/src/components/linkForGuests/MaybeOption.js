import { useState } from 'react';
import { postSuggestionMsg } from '../../utils/apis/wannagoApiServices/postWannaGos';

import '../../css/MaybeOption.css';

const MaybeOption = ({ id }) => {
  const [msgSent, setMsgSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = e.target.suggestion.value;
    console.log('this is msg', msg);
    if (!msg.replace(/\s/g, '').length) {
      return;
    }
    await postSuggestionMsg(msg, id);
    setMsgSent(!msgSent);
    e.target.suggestion.value = '';
  };

  return (
    <>
      <h2>
        Let Fabi know if you have any suggestion. Remember to say who you are.
      </h2>
      {msgSent ? (
        <h3>We'll let Fabi know</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            name='suggestion'
            placeholder='write your suggestion here'
            autoFocus
            required
          ></textarea>
          <button
            className='button'
            type='submit'
          >
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default MaybeOption;

