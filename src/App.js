import React, {useState} from 'react';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks'
import './App.css';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor:theme }}>
      <h2>Class counter</h2>
      <Counter initialCount={0} />
      <h2>Functionnal counter</h2>
      <CounterHooks initialCount={0}/>
      <button onClick={()=>setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
