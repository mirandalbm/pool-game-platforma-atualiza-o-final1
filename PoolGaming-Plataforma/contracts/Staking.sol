// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking {
    IERC20 public poolToken;
    mapping(address => uint256) public balances;
    mapping(address => uint256) public stakingTimestamps;
    uint256 public rewardRate = 100; // Exemplo: 100 tokens por bloco

    constructor(address _token) {
        poolToken = IERC20(_token);
    }

    function stake(uint256 amount) public {
        require(amount > 0, "Valor deve ser maior que zero");
        poolToken.transferFrom(msg.sender, address(this), amount);
        balances[msg.sender] += amount;
        stakingTimestamps[msg.sender] = block.timestamp;
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Saldo insuficiente");
        uint256 reward = calculateReward(msg.sender);
        balances[msg.sender] -= amount;
        poolToken.transfer(msg.sender, amount + reward);
        stakingTimestamps[msg.sender] = block.timestamp;
    }

    function calculateReward(address staker) public view returns (uint256) {
        uint256 stakedTime = block.timestamp - stakingTimestamps[staker];
        return (balances[staker] * rewardRate * stakedTime) / 1e18;
    }
}
