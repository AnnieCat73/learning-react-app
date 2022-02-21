//import logo from './logo.svg';
import './App.css';
import './index.css';
//import Lake from './Lake.js';





const list = [1, 2, 3, 4, 5];
const listItems = list.map((item, index) => (
  <li key={index}>{item}</li>
))

function App() {
  

  return (
    <ul className="list">
      {listItems}
    </ul>
    
  );
}

export default App;
