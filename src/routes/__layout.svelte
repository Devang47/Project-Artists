<script>
  import { onMount } from "svelte";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";

  onMount(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
