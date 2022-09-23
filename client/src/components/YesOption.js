import { postPplGoing } from "../utils/apis/wannagoApiServices/postWannaGos";

const YesOption = ({id}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    
    postPplGoing(name, email, id)
    e.target.name.value = '';
    e.target.email.value = '';
  }

  return (
    <div>
      <h1>That's wonderful</h1>
      <h3>
        Let Fabi know your name and email to notify you if there is any change
      </h3>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name='name'></input>
          <label>Email</label>
          <input name='email'></input>
          
            <button type='submit' className='button important'>send</button>
        
        </form>
      </div>
    </div>
  );
};

export default YesOption;




