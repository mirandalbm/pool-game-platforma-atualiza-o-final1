// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {
    struct Proposal {
        string description;
        uint256 votes;
        bool executed;
    }
    Proposal[] public proposals;
    mapping(address => uint256) public votingPower;
    function createProposal(string memory _desc) public {
        proposals.push(Proposal(_desc, 0, false));
    }
    function vote(uint256 proposalId) public {
        require(votingPower[msg.sender] > 0, "No voting power");
        proposals[proposalId].votes += votingPower[msg.sender];
    }
    function execute(uint256 proposalId) public {
        Proposal storage p = proposals[proposalId];
        require(!p.executed, "Already executed");
        require(p.votes > 100, "Not enough votes");
        p.executed = true;
    }
}
