import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';

function App() {
  let [counter, setcounter] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
