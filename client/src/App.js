import { useState, useEffect } from 'react';
import { getWannaGos, postAwannaGo } from './utils/apiServices';
import WannagoForm from './components/FormWannago'
import './App.css';

function App() {
  const [wannaGos, setWannaGos] = useState([]);

  useEffect(() => {
    setWannaGos(getWannaGos());
  }, []);

  return (
    <WannagoForm setWannaGos={setWannaGos}></WannagoForm>
  );
}

export default App;

