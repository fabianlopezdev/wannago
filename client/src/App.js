import { useState, useEffect } from 'react';
import { getWannaGos, postAwannaGo } from './utils/apiServices';

import './App.css';

function App() {
  // const wannaGo = {
  //   what: '',
  //   where: '',
  //   when: '',
  //   owner: '',
  //   category: '',
  // };

  const [wannaGos, setWannaGos] = useState([]);

  useEffect(() => {
    setWannaGos(getWannaGos());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWannaGo = {
      what: e.target.what.value,
      when: e.target.when.value,
      where: e.target.where.value,
      owner: e.target.owner.value,
    };

    postAwannaGo(newWannaGo);

    // setWannaGos((oldWannaGosArr) => {
    //   const newWannaGosArr = [...oldWannaGosArr, newWannaGo];
    //   return newWannaGosArr;
    // });

    e.target.what.value = '';
    e.target.when.value = '';
    e.target.where.value = '';
    e.target.owner.value = '';
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label>What?</label>
        <input
          type='text'
          name='what'
        ></input>
        <hr />
        <label>When?</label>
        <input
          type='datetime-local'
          name='when'
        ></input>
        <hr />
        <label>Where?</label>
        <input
          type='text'
          name='where'
        ></input>
        <hr />
        <label>Owner</label>
        <input
          type='text'
          name='owner'
        ></input>
        <hr />
        <button type='submit'></button>
      </form>
    </div>
  );
}

export default App;

