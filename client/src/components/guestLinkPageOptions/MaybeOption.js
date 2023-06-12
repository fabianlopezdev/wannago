//External dependencies
import { useState } from 'react';
import { Alert } from 'bootstrap';

//Internal dependencies
import {
  putSuggestion,
  putSuggestionsCounter,
} from '../../utils/apis/wannagoApiServices/putWannaGos';

import './Options.css';

const MaybeOption = ({ id, suggestionBoxCounter, hostName, hostId }) => {
  const [msgSent, setMsgSent] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const msg = e.target.suggestion.value;
    console.log('this is msg', msg);
    if (!msg.replace(/\s/g, '').length) {
      return;
    }
    try {
      await putSuggestion(name,msg, id, hostId);
      await putSuggestionsCounter(id, ++suggestionBoxCounter, hostId);
      console.log(suggestionBoxCounter);
      setMsgSent(!msgSent);
    } catch (e) {
      setError('Sorry, something went wrong and we could not send the message. Please try again')
      console.log(
        `Error in MaybeOption.js, trying to send the suggestion to backend to put in db. ${e}`
      );
    }
    e.target.name.value = '';
    e.target.suggestion.value = '';
  };

  return (
    <>
      <div className='flexColumnCenterAll'>
        {!msgSent && <h4 style={{ marginLeft: '1rem', marginRight: '1rem' }}>
          Let {hostName} know if you have any suggestion.
        </h4>}
        {error && <Alert variant='danger'>{error}</Alert>}
        {msgSent ? (
          <h3>Great! We've just notified {hostName}.</h3>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='flexColumnCenterAll'>
              <label
                style={{ alignSelf: 'start' }}
                htmlFor='name'
              >
                Name
              </label>

              <input
                name='name'
                autoFocus
                required
              ></input>
              <label
                htmlFor='suggestion'
                style={{ alignSelf: 'start' }}
              >
                Message
              </label>
              <textarea
                style={{resize: 'none', width: '189px'}}
                name='suggestion'
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











