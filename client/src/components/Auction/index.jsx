import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import AuctionButtons from "./AuctionButtons";
import AuctionItem from "./AuctionItem";

function Auction() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [maxBid, setMaxBid] = useState("?");
  const [maxBidder, setMaxBidder] = useState("?");
  const [balance, setBalance] = useState("?");

  const auction =
    <>
      <div className="auction-img-container">
        <AuctionItem />
      </div>
      <div className="auction-btn-container">
        <AuctionButtons setValue={setValue} setMaxBid={setMaxBid} setMaxBidder={setMaxBidder} setBalance={setBalance} />
      </div>
      <br></br>
      <div>
        <p id="max-bid">Balance : {balance}</p>
        <p id="max-bid">Highest Bid : {maxBid/1000000000000000000} ETH</p>
        <p id="max-bidder">Highest Bidder : {maxBidder}</p>
        <br></br>
        <h2>Bid Transaction Details:</h2>
        <br></br>
        <table>
          <tr>
            <td id="side-header">Block Hash</td>
            <td>{value.blockHash}</td>
          </tr>
          <tr>
            <td id="side-header">Block Number</td>
            <td>{value.blockNumber}</td>
          </tr>
          <tr>
            <td id="side-header">From</td>
            <td>{value.from}</td>
          </tr>
          <tr>
            <td id="side-header">To</td>
            <td>{value.to}</td>
          </tr>
          <tr>
            <td id="side-header">Transaction Hash</td>
            <td>{value.transactionHash}</td>
          </tr>
        </table>
      </div>
    </>;

  return (
    <div className="auction">
      {
        auction
      }
    </div>
  );
}

export default Auction;
