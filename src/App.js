import logo from './logo.svg';
import './App.css';
import Classcomponent from './components/Classcomponent';
import FunctionalComponent from './components/FunctionalComponents';
import {useState} from 'react';
function App() {
  let name = [
    {n:0,m:"vanakam"},
    {m:"hello",n:"hi"},
  ];

  let [id,setid] = useState(7092472971);
  return (
    <div className="App">
      <h1>Class Components</h1>
      <Classcomponent />
      <h1>Functional Component</h1>

      <FunctionalComponent names={name} id={id} setid={setid}/>
    </div>
  );
}

export default App;
