const fs = require("fs");
const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
const bytecode = fs.readFileSync("contract/bytecode.bin");
const abi = JSON.parse(fs.readFileSync("contract/abi.abi"));

(async function () {
  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];
  const myContract = new web3.eth.Contract(abi);
  myContract
    .deploy({
      data: bytecode.toString(),
    })
    .send({
      from: myWalletAddress,
      gas: 5000000,
    })
    .then((deployment) => {
      console.log("voting was successfully deployed!");
      console.log("voting can be interfaced with at this address:");
      console.log(deployment.options.address);
    })
    .catch((err) => {
      console.error(err);
    });
})();
