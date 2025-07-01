// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MatchRecorder {
    struct Match {
        address player1;
        address player2;
        uint256 timestamp;
        bytes32 replayHash;
    }
    Match[] public matches;
    function recordMatch(address _player1, address _player2, bytes32 _replayHash) public {
        matches.push(Match(_player1, _player2, block.timestamp, _replayHash));
    }
}
