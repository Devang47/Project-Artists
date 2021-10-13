<script>
  import Login from "../Components/Login.svelte";

  import { user } from "../state";
  console.log($user, " is here");

  // Initialize Web3
  // if (typeof web3 !== 'undefined') {
  // 	web3 = new Web3(web3.currentProvider);
  // } else {
  // 	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  // }

  // // Set Account
  // web3.eth.defaultAccount = web3.eth.accounts[0];

  // // Set Contract Abi
  // var contractAbi = []; // Add Your Contract ABI here!!!

  // // Set Contract Address
  // var contractAddress = ''; // Add Your Contract address here!!!

  // // Set the Contract
  // var contract = web3.eth.contract(contractAbi).at(contractAddress);

  // // Display Candidate Name
  // contract.candidateName(function (err, candidateName) {
  // 	$('#candidateName').html(candidateName);
  // });

  // // Change the Candidate Name
  // $('form').on('submit', function (event) {
  // 	event.preventDefault();
  // 	contract.setCandidate($('input').val());
  // });


</script>

{#if user}
  <Login />
{/if}
