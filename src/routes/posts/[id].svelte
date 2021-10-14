<script context="module">
  export async function load({ page }) {
    let postId = page.params.id;
    return { props: { id: postId } };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { account, posts } from "../../state";

  export let id;
  import Navbar from "../../Components/Navbar.svelte";

  let thisPost = {};
  let commentInput = "";

  onMount(() => {
    // posts.set(JSON.parse(localStorage.getItem("posts")) || []);
    thisPost = $posts.find((e) => e.id == id);
    console.log(thisPost, $posts);
  });

  const addComment = () => {
    if (!commentInput) {
      return;
    }

    const data = {
      data: commentInput,
      id: Date.now(),
      username: $account.name || "Unknown",
    };

    thisPost.comments.push(data);

    thisPost = thisPost;
    commentInput = "";
    const newPosts = [...$posts.filter((e) => e.id != id), thisPost];

    localStorage.setItem("posts", JSON.stringify(newPosts));
  };
</script>

<Navbar />
<article class="mx-auto flex-col gap-2 flex mt-16 w-11/12 lg:mx-auto max-w-5xl">
  <div class="flex items-center justify-start">
    <span class="text-white mr-4 text-3xl font-medium"> {thisPost.author} </span>
    <button class="bg-accent py-0.5 px-2 text-sm font-medium">Gift</button>
  </div>
  <div class="bg-white h-96 rounded-md overflow-hidden">
    <img src={""} alt="" />
  </div>
  <div class="flex items-center justify-end gap-2 w-full">
    <button>
      <svg
        width="32"
        height="27"
        viewBox="0 0 25 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.96366 2.625C5.45872 2.625 3.42737 4.564 3.42737 6.95625C3.42737 8.88737 4.22122 13.4706 12.0354 18.1037C12.1754 18.1859 12.3361 18.2293 12.4999 18.2293C12.6638 18.2293 12.8245 18.1859 12.9645 18.1037C20.7787 13.4706 21.5725 8.88737 21.5725 6.95625C21.5725 4.564 19.5412 2.625 17.0362 2.625C14.5313 2.625 12.4999 5.25 12.4999 5.25C12.4999 5.25 10.4686 2.625 7.96366 2.625Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button>
      <svg
        width="28"
        height="28"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.25 16.625C15.5496 16.625 17.1999 16.625 18.2245 15.5995C19.25 14.5749 19.25 12.9246 19.25 9.625C19.25 6.32538 19.25 4.67513 18.2245 3.6505C17.1999 2.625 15.5496 2.625 12.25 2.625H8.75C5.45038 2.625 3.80013 2.625 2.7755 3.6505C1.75 4.67513 1.75 6.32538 1.75 9.625C1.75 12.9246 1.75 14.5749 2.7755 15.5995C3.34688 16.1718 4.1125 16.4246 5.25 16.5358"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.2501 16.625C11.1686 16.625 9.97684 17.0625 8.88921 17.6269C7.14096 18.5343 6.26684 18.9884 5.83634 18.6988C5.40584 18.41 5.48721 17.5131 5.65084 15.7203L5.68759 15.3125"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>

  <div class="my-10 mb-20">
    <div class="text-white text-xl font-semibold">Comments:</div>
    <form
      class="mt-5 font-sans flex items-center justify-center bg-input_bg py-4 px-4 rounded-md"
      on:submit|preventDefault={addComment}
    >
      <input
        bind:value={commentInput}
        type="text"
        class=" rounded-md w-full bg-transparent outline-none text-white text-lg px-4"
        placeholder="Add a comment..."
      />
      <button
        class="py-2 px-4 bg-light_dark text-dark font-semibold rounded-md outline-none duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg"
        >Post</button
      >
    </form>

    <div class="mt-12 font-sans flex flex-col gap-8">
      {#if thisPost.comments}
        {#each thisPost.comments as item}
          <div class="bg-input_bg py-6 px-8 shadow rounded-md">
            <div class="text-lg text-gray-300">{item.username}</div>
            <p class="text-white mt-1.5">
              {item.data}
            </p>
          </div>
        {/each}
      {:else}
        <div class="text-center text-white">No comments to show</div>
      {/if}
    </div>
  </div>
</article>
