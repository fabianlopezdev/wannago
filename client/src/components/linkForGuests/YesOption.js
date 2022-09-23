import { postPplGoing } from '../../utils/apis/wannagoApiServices/postWannaGos';
import { useState } from 'react';
const YesOption = ({ id }) => {
  const [submitClicked, setsubmitClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    await postPplGoing(name, email, id);
    setsubmitClicked(!submitClicked);
    e.target.name.value = '';
    e.target.email.value = '';
  };

  return (
    <div>
      <h1>That's wonderful</h1>
      {submitClicked ? (
        <h3>
          Amazing, we just notified Fabi. Now, sit and wait until the event
        </h3>
      ) : (
        <>
          <h3>
            Let Fabi know your name and email to notify you if there is any
            change
          </h3>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                name='name'
                required
              ></input>
              <label>Email</label>
              <input
                name='email'
                required
              ></input>
              <button
                type='submit'
                className='button important'
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

