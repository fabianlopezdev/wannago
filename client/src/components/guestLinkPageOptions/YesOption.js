//External dependencies
import { useState } from 'react';
import {Alert} from 'bootstrap'
//Internal dependencies
import {
  putPplGoing,
  putGoingCounter,
} from '../../utils/apis/wannagoApiServices/putWannaGos';

const YesOption = ({ id, goingCounter, ownerName }) => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [error, setError] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    try {
      await putPplGoing(name, email, id);
      await putGoingCounter(id, ++goingCounter);
      console.log(goingCounter);
      setSubmitClicked(!submitClicked);
    } catch (e) {
      setError('Sorry, something went wrong. Please try again')
      console.log(
        `Error in YesOption.js, sending to backend to put in db the people that said yes to the wannaGo. ${e}`
      );
    }
    e.target.name.value = '';
    e.target.email.value = '';
  };

  return (
    <div>
      <h2>That's wonderful</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      {submitClicked ? (
        <h3 className='textGuestLink'>
          Amazing, we just notified {ownerName}. Now, sit and wait until the
          event
        </h3>
      ) : (
        <>
          <h4>
            Let {ownerName} know your name and email to notify you if there is
            any change
          </h4>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type='text'
                name='name'
                required
              ></input>
              <label>Email</label>
              <input
                type='email'
                name='email'
                required
              ></input>
              <button
                type='submit'
                className='button'
              >
                send
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default YesOption;

