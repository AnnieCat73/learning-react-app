//import logo from './logo.svg';
import './App.css';
import './index.css';
//import Lake from './Lake';

const lakeList = ["Echo Lake", "Maud Lake", "Cascade Lake"];
const lakes = lakelist.map((lake, index) => (
  <li key={index}>{lake}</li>
))

function App() {
  

  return (
    <div className="App">
      <ul>
        {lakes}
      </ul>
      
      
    </div>
  );
}

export default App;
