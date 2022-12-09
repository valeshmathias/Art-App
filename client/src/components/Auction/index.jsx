import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import AuctionButtons from "./AuctionButtons";
import AuctionItem from "./AuctionItem";

function Auction() {
  const { state } = useEth();
  const [value, setValue] = useState("?");

  const auction =
    <>
      <div className="auction-img-container">
        <AuctionItem />
      </div>
      <div className="auction-btn-container">
        <AuctionButtons />
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
