// Script de deploy para os contratos Solidity usando Hardhat
const hre = require("hardhat");

async function main() {
  // Deploy PoolToken
  const PoolToken = await hre.ethers.getContractFactory("PoolToken");
  const poolToken = await PoolToken.deploy();
  await poolToken.deployed();
  console.log("PoolToken deployed to:", poolToken.address);

  // Deploy MatchRecorder
  const MatchRecorder = await hre.ethers.getContractFactory("MatchRecorder");
  const matchRecorder = await MatchRecorder.deploy();
  await matchRecorder.deployed();
  console.log("MatchRecorder deployed to:", matchRecorder.address);

  // Deploy Staking
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(poolToken.address);
  await staking.deployed();
  console.log("Staking deployed to:", staking.address);

  // Deploy DAO
  const DAO = await hre.ethers.getContractFactory("DAO");
  const dao = await DAO.deploy();
  await dao.deployed();
  console.log("DAO deployed to:", dao.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
