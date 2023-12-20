require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env" });

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/KowAtTVNQHH51-_oJperUJKFn0KFey68",
      accounts: [process.env.privateKey]
    },
    inEVM: {
      url: "https://inevm-rpc.caldera.dev/",  
      chainId: 1738
    }
  },
}