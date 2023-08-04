//External dependencies
import { useState } from 'react';
import {Alert} from 'bootstrap'
//Internal dependencies
import {
  putAddAttendees,
  putIncrementAttendeesCount,
} from '../../utils/apis/wannagoApiServices/putWannaGos';
import { useAuth } from '../../contexts/AuthContext';
const YesOption = ({ id, attendeesCount, hostName, hostId }) => {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [error, setError] = useState();

  const { userToken } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const lastName = e.target.lastName.value;
    try {
      await putAddAttendees(name, lastName, id, hostId, userToken);
      await putIncrementAttendeesCount(id, ++attendeesCount, hostId, userToken);

      setSubmitClicked(!submitClicked);
    } catch (e) {
      setError('Sorry, something went wrong. Please try again');
      console.log(
        `Error in YesOption.js, sending to backend to put in db the people that said yes to the wannaGo. ${e}`
      );
    }
    e.target.name.value = '';
    e.target.lastName.value = '';
  };

  return (
    <div className='flexColumnCenterAll'>
      {error && <Alert variant='danger'>{error}</Alert>}
      {submitClicked ? (
        <h3 style={{ marginLeft: '1rem', marginRight: '1rem' }}>
          Amazing, we've just notified {hostName}. Now, sit and wait until the
          event
        </h3>
      ) : (
        <>
          <h2>Great!</h2>
          <h4>Let {hostName} know who you are.</h4>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <div className='flexColumnCenterAll'>
                <label
                // style={{ alignSelf: 'start' }}
                >
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  style={{ width: '80%' }}
                  required
                ></input>
                <label
                // style={{ alignSelf: 'start' }}
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  style={{ width: '80%' }}
                  required
                ></input>
                <button
                  type='submit'
                  className='button'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default YesOption;











