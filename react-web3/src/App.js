import { useEffect, useState } from "react";
import Web3 from "web3";

const web3 = new Web3("HTTP://127.0.0.1:7545");
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "changeName",
    outputs: [
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

web3.defaultAccount = web3.eth.accounts[0];

const address = "0x7A0B174A56407dd597EFE0Df2148Dd85735d25D1";
const contract = new web3.eth.Contract(abi, address);

function App() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => getName);

  async function getName() {
    const username = await contract.methods.name().call();
    setName(username);
  }

  const changeName = async (e) => {
    e.preventDefault();

    await contract.methods
      .changeName(input || "Enter a valid name!!")
      .send({ from: "0xE06b7B4747b0a16d1E1A7536303997223d547445" });
    getName();
  };

  return (
    <div className="">
      <form action="#" onSubmit={changeName} className="p-20 text-lg mx-auto block">
        <input
          type="text"
          className="py-2 px-4 bg-gray-100 focus:bg-gray-200 outline-none border-0 "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-red-600 text-white py-2 px-4 font-bold hover:scale-105 transform duration-75">
          Change name
        </button>
      </form>

      <div className="bg-gray-100 border-2 border-dashed py-5 px-10 text-xl mx-auto w-10/12">
        {name}
      </div>
    </div>
  );
}

export default App;
