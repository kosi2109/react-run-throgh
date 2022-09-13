import logo from './logo.svg';
import './App.css';
import Input from './Input';
import { useEffect, useRef } from 'react';

function App() {
  const passwordRef = useRef();

  useEffect(()=> {
    passwordRef.current.changeColor();
  }, [])

  return (
    <div className="App">
      <Input ref={passwordRef} />
    </div>
  );
}

export default App;
