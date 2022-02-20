//import logo from './logo.svg';
import './App.css';
import './index.css';
import Lake from './Lake.js';

const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];
const lakes = lakeList.map((lake, index) => (
  <li key={index}>{lake}</li>
))

function App() {
  

  return (
    <div className="App">
      <Lake name="Lake Shirley"/>
      <Lake name="Lake Ontario"/>
      <ul className="list">
        {lakes}
      </ul>
      
      
    </div>
  );
}

export default App;
