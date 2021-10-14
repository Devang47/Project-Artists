<script>
  import { posts } from "../state";

  import Post from "../Components/Post.svelte";
  import Login from "../Components/Login.svelte";

  import { user } from "../state";
  import Navbar from "../Components/Navbar.svelte";
  import Footer from "../Components/Footer.svelte";

  const arr = new Array(10).fill(null);
</script>

{#if $user}
  <section>
    <Navbar />
    <div class="grid grid-cols-1 w-full gap-8 py-10 mb-20">
      {#each $posts as item (item.id)}
        <Post details={item} />
      {/each}
    </div>
  </section>
  <Footer />
{:else}
  <Login />
{/if}
