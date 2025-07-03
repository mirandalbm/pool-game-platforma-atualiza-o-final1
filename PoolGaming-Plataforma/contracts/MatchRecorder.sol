// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MatchRecorder {
    struct Match {
        address player1;
        address player2;
        uint256 timestamp;
        string result;
    }

    Match[] public matches;

    event MatchRecorded(address indexed player1, address indexed player2, string result, uint256 timestamp);

    function recordMatch(address _player1, address _player2, string memory _result) public {
        matches.push(Match(_player1, _player2, block.timestamp, _result));
        emit MatchRecorded(_player1, _player2, _result, block.timestamp);
    }

    function getMatch(uint256 index) public view returns (address, address, uint256, string memory) {
        Match memory m = matches[index];
        return (m.player1, m.player2, m.timestamp, m.result);
    }

    function getMatchCount() public view returns (uint256) {
        return matches.length;
    }
}
