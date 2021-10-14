<script>
  import { onMount } from "svelte";

  import { user, account, posts, users } from "../state";

  import "../styles/tailwind-output.css";
  import "../styles/global.css";

  $: if ($user) {
    const feed = JSON.parse(localStorage.getItem("posts"));
    console.log(feed, $posts);
    if (feed) {
      posts.set(feed);
    }
    console.log(feed, $posts);
  }

  onMount(() => {
    users.set(localStorage.getItem("users") || []);

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    } else {
      console.log("not installed");
    }
  });
</script>

<slot />
