// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PoolToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("PoolToken", "POOL") {
        _mint(msg.sender, initialSupply);
    }
}
