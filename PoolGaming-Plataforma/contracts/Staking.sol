// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking {
    IERC20 public poolToken;
    mapping(address => uint256) public balances;
    constructor(address _token) {
        poolToken = IERC20(_token);
    }
    function stake(uint256 amount) public {
        require(poolToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        balances[msg.sender] += amount;
    }
    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        require(poolToken.transfer(msg.sender, amount), "Transfer failed");
    }
}
