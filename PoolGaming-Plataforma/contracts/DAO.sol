// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DAO {
    struct Proposal {
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        uint256 deadline;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => mapping(uint256 => bool)) public voted;

    event ProposalCreated(uint256 id, string description, uint256 deadline);
    event Voted(uint256 proposalId, address voter, bool support);
    event ProposalExecuted(uint256 proposalId, bool passed);

    function createProposal(string memory _description, uint256 _duration) public {
        proposals.push(Proposal(_description, 0, 0, block.timestamp + _duration, false));
        emit ProposalCreated(proposals.length - 1, _description, block.timestamp + _duration);
    }

    function vote(uint256 proposalId, bool support) public {
        require(block.timestamp < proposals[proposalId].deadline, "Votação encerrada");
        require(!voted[msg.sender][proposalId], "Já votou");
        voted[msg.sender][proposalId] = true;
        if (support) {
            proposals[proposalId].votesFor++;
        } else {
            proposals[proposalId].votesAgainst++;
        }
        emit Voted(proposalId, msg.sender, support);
    }

    function executeProposal(uint256 proposalId) public {
        Proposal storage proposal = proposals[proposalId];
        require(block.timestamp >= proposal.deadline, "Prazo não encerrado");
        require(!proposal.executed, "Já executada");
        proposal.executed = true;
        bool passed = proposal.votesFor > proposal.votesAgainst;
        emit ProposalExecuted(proposalId, passed);
    }
}
