//import logo from './logo.svg';
import './App.css';
import './index.css';
import Hello from './Hello'

function App() {
  let person = "Pedro";
  let city = {
    cityName: 'Madrid',
    country: 'Spain'
  };

  return (
    <div className="App">
      <Hello 
        library="React"
        message="Let's have fun!"
        number={3}
      />
      <h2 id="heading" className="cool-text">Hello from {person} and I am from {city.cityName}, {city.country} </h2>
    </div>
  );
}

export default App;
