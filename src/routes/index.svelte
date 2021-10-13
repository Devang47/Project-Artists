<script>
  import Post from "../Components/Post.svelte";
  import Login from "../Components/Login.svelte";

  import { user } from "../state";
  import Navbar from "../Components/Navbar.svelte";
import Footer from "../Components/Footer.svelte";
  console.log($user, " is here");

  const arr = new Array(10).fill(null);
</script>

{#if $user}
  <Login />
{:else}
  <section>
    <Navbar />
    <div class="grid grid-cols-1 w-full gap-8 py-10 mb-20">
      {#each arr as item}
        <Post />
      {/each}
    </div>
  </section>
  <Footer />
{/if}
