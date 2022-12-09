import { EthProvider } from "./contexts/EthContext";
import Auction from "./components/Auction";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Auction />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
