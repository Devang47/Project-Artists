<script>
  import { onMount } from "svelte";

  import { user, account, posts, users } from "../state";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";

  onMount(() => {
    users.set(localStorage.getItem("users") || []);
    posts.set(JSON.parse(localStorage.getItem("posts")) || []);

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
