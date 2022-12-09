import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function AuctionButtons({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const newBid = async () => {
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const value = await contract.methods.setNewBid().call({ from: accounts[0] , value: ""});
    const maxBid = await contract.methods.getHighestBid().call({ from: accounts[0] });
    const maxBidder = await contract.methods.getHighestBidder().call({ from: accounts[0] });
    setValue(value);
    setValue(maxBid);
    setValue(maxBidder);
  };

  const withdraw = async () => {
    const value = await contract.methods.withdrawBid().call({ from: accounts[0] });
    setValue(value);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  return (
    <div className="btns">

      <input type="text" placeholder="uint" value={inputValue} onChange={handleInputChange} />
      <button onClick={newBid}>Bid on Item</button>
      <p>{}</p>

      <div onClick={withdraw} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default AuctionButtons;
