import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function AuctionButtons({ setValue, setMaxBid, setMaxBidder }) {
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
    const value = await contract.methods.setNewBid().send({ from: accounts[0], value: (inputValue*1000000000000000000)});
    const maxBid = await contract.methods.getHighestBid().call({ from: accounts[0] });
    const maxBidder = await contract.methods.getHighestBidder().call({ from: accounts[0] });
    setValue(value);
    setMaxBid(maxBid);
    setMaxBidder(maxBidder);
  };

  const withdraw = async () => {
    const value = await contract.methods.withdrawBid(accounts[0]).send({ from: accounts[0] });
    setValue(value);
  };

  return (
    <div className="btns">

      <input id="amount" type="text" placeholder="ETH" value={inputValue} onChange={handleInputChange}/>
      <br></br><br></br>
      <button onClick={newBid}>Bid on Item</button>
      <button onClick={withdraw} className="input-btn">Withdraw</button>

    </div>
  );
}

export default AuctionButtons;
