<script>
  import { onMount } from "svelte";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";
  import Index from "./index.svelte";

  onMount(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
