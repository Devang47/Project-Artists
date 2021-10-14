<script>
  import { fade } from "svelte/transition";

  import { onMount } from "svelte";
  import { account, user, users } from "../state";

  let login = () => {};
  let error = "";

  onMount(() => {
    if (window.ethereum && ethereum.isMetaMask) {
      login = async () => {
        try {
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
          const userAccount = accounts[0];

          const newUser = {
            id: Date.now(),
            accountDetails: userAccount,
            name: "Unknown",
            artist_points: 100,
            profile_pic: "",
          };

          account.set(newUser);
          users.set([...$users, newUser]);

          localStorage.setItem("users", JSON.stringify($users));

          user.set(true);
        } catch (e) {
          error = "Error: " + e.message;
          console.log(e);
        }
      };
    } else {
      error = "Metamask not installed";
    }
  });
</script>

<section in:fade class="bg-dark w-100 h-100 text-white text-center   ">
  <div class="w-11/12 mx-auto py-20 px-5 flex flex-col items-center justify-centers lg:py-40">
    <h1 class="text-4xl font-bold lg:text-5xl ">
      Login to Artists<span class="text-accent">.</span>
    </h1>
    <h2 class="my-2 py-2 max-w-md mx-auto text-gray-200 lg:text-lg lg:max-w-2xl lg:mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maecenas sed viverra egestas
      morbi accumsan, porta sit turpis. Vitae ornare in volutpat tristique sit. Volutpat nibh
      tincidunt velit quam venenatis semper at. Est ornare morbi felis suspendisse.
    </h2>
    <div class=" text-accent italic ">{error}</div>
    <button
      class="bg-white rounded-md cursor-pointer duration-75 active:scale-95 hover:scale-105 py-2 px-4 mt-12 shadow hover:shadow-lg select-none mb-10"
      on:click={login}
    >
      <img
        class="w-40 select-none "
        src="https://res.cloudinary.com/dyn3sdtfm/image/upload/v1634091121/metamask-logo_y5yetp.svg"
        alt="metamask logo"
      />
    </button>

    or use a Existing account

    <form on:submit|preventDefault={null}>
      <input
        type="text"
        class=" rounded-md w-full bg-transparent outline-none text-white text-lg px-4 border-2 w-10/12 max-w-sm mt-4 mx-auto py-2 px-4"
        placeholder="Enter a number between 1-10"
      />
    </form>
  </div>
</section>
