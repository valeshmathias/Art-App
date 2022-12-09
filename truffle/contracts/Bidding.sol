// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >0.4.0 <0.9.0;

contract Bidding {
    mapping (address => uint) bidData;
    uint highestBid;
    uint startTime = block.timestamp;
    uint endTime;
    address highestBidder;

    function setNewBid() public payable {
        uint amount = bidData[msg.sender] + msg.value;
        // require(block.timestamp <= endTime, "The auction has ended.");
        require(msg.value > 0, "You need to bid some amount.");

        require(msg.value > highestBid, "Higher bid is present.");
        bidData[msg.sender] = amount;
        highestBid = amount;
        highestBidder = msg.sender;
    }

    function getBalance(address _address) public view returns(uint) {
        return bidData[_address];
    }

    function getHighestBid() public view returns(uint) {
        return highestBid;
    }

    function getHighestBidder() public view returns(address) {
        return highestBidder;
    }

    function setEndTime(uint _endTime) public {
        endTime = _endTime;
    }

    function withdrawBid(address payable _address) public {
        if (bidData[_address] > 0) {
            _address.transfer(bidData[_address]);
        }
    }
}