//import logo from './logo.svg';
import './App.css';
import './index.css';
import Lake from './Lake.js';
import SkiResort from './SkiResort.js';




let season = "";//add "", winter or summer here


function App() {
  {/*1) if(season === "summer") {
    return <Lake name="Jenny Lake"/>
  } else if (season === "winter") {
    return <SkiResort name="Jackson Hole Mountain resort"/>
  }*/}

  //2) or refactor
  return (
    <div>
      {season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : season === "winter" ? (
        <SkiResort name="Jackson Hole Mountain resort" />
      ) : (
        <h1>Come back in the winter or summer!</h1>
      )}
    </div>
  );
}

export default App;
