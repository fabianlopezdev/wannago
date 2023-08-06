//External dependencies
import { useState } from 'react';
import { Alert } from 'bootstrap';

//Internal dependencies
import {
  putStoreSuggestion,
  putIncrementSuggestionsCount,
} from '../../utils/apis/wannagoApiServices/putWannagos';

import './Options.css';

const MaybeOption = ({ id, suggestionsCount, hostName, hostId }) => {
  const [msgSent, setMsgSent] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const msg = e.target.suggestion.value;
    console.log('this is msg', msg);
    if (!msg.replace(/\s/g, '').length) {
      return;
    }
    try {
      await putStoreSuggestion(name, msg, id, hostId);
      await putIncrementSuggestionsCount(id, ++suggestionsCount, hostId);
      console.log(suggestionsCount);
      setMsgSent(!msgSent);
    } catch (e) {
      setError(
        'Sorry, something went wrong and we could not send the message. Please try again'
      );
      console.log(
        `Error in MaybeOption.js, trying to send the suggestion to backend to put in db. ${e}`
      );
    }
    e.target.name.value = '';
    e.target.suggestion.value = '';
  };

  return (
    <>
      <div className='option-container'>
        {!msgSent && (
          <h4 style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            Let {hostName} know if you have any suggestion.
          </h4>
        )}
        {error && <Alert variant='danger'>{error}</Alert>}
        {msgSent ? (
          <h3>Great! We've just notified {hostName}.</h3>
        ) : (
          <form
            className='form'
            onSubmit={handleSubmit}
          >
            <div className='option-container'>
              <label
                // style={{ alignSelf: 'start' }}
                htmlFor='name'
              >
                Name
              </label>

              <input
                name='name'
                placeholder='Your Name'
                style={{ width: '80%' }}
                autoFocus
                required
              ></input>
              <label
                htmlFor='suggestion'
                // style={{ alignSelf: 'start' }}
              >
                Message
              </label>
              <textarea
                name='suggestion'
                style={{ width: '80%' }}
                placeholder='Write your suggestion here'
                required
              ></textarea>
              <button
                className='button maybe'
                type='submit'
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default MaybeOption;




