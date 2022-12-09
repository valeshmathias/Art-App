import { EthProvider } from "./contexts/EthContext";
import Demo from "./components/Demo";
import Auction from "./components/Auction";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          {/* <Demo />
          <hr /> */}
          <Auction />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
