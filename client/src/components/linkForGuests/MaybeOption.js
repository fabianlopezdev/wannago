//External dependencies
import { useState } from 'react';

//Internal dependencies
import { putSuggestionMsg, putSuggestionBoxCounter } from '../../utils/apis/wannagoApiServices/putWannaGos';

import '../../css/MaybeOption.css';

const MaybeOption = ({ id, suggestionBoxCounter, ownerName }) => {
  const [msgSent, setMsgSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = e.target.suggestion.value;
    console.log('this is msg', msg);
    if (!msg.replace(/\s/g, '').length) {
      return;
    }
    try {
      await putSuggestionMsg(msg, id);
      await putSuggestionBoxCounter(id, ++suggestionBoxCounter);
      console.log(suggestionBoxCounter);
      setMsgSent(!msgSent);
    } catch (e) {
      console.log(
        `Error in MaybeOption.js, trying to send the suggestion to backend to put in db. ${e}`
      );
    }
    e.target.suggestion.value = '';
  };

  return (
    <>
      <h2>
        Let {ownerName} know if you have any suggestion. Remember to say who you are.
      </h2>
      {msgSent ? (
        <h3>We'll let {ownerName} know</h3>
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


