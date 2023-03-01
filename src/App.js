import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pin, setPin] = useState('');

  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios.get('https://api.publicapis.org/entries').then((result) => {
        console.log('res', result);
      });
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    }
  }, [pin])

  return (
    <div className="App">
      <input type="input" name="pin" onChange={(event) => setPin(event.target.value)} />
    </div>
  );
}

export default App;
