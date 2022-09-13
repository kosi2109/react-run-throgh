import logo from './logo.svg';
import './App.css';
import Input from './Input';
import { useEffect, useRef } from 'react';

// if you want to autoscroll to component
// or if you want to focus on input
// when you initialize app 
// you can use forwardRef 

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
