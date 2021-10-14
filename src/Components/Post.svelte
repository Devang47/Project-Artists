<script>
  import { fade } from "svelte/transition";

  export let details;

  let liked = true;
  const handleLike = () => {
    liked = !liked;
  };
</script>

<article in:fade class="mx-auto flex-col gap-2 flex mt-5 w-11/12 max-w-md lg:max-w-3xl lg:mx-auto ">
  <div class="flex items-center justify-start">
    <span class="text-white mr-4 text-2xl font-medium"> {details.author} </span>
    <button class="bg-accent py-0.5 px-2 text-sm font-medium rounded active:scale-95 duration-75"
      >Gift</button
    >
  </div>
  <a href={`/posts/${details.id}`}>
    <div class="bg-white h-96 rounded">
      <img src={details.data} alt="" />
    </div></a
  >
  <div class="flex items-center justify-end gap-3 w-full">
    <button on:click={handleLike}>
      {#if liked}
        <svg
          width="32"
          height="27"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4919 3.89367C20.1661 3.13173 19.6963 2.44126 19.1088 1.86092C18.5208 1.27885 17.8276 0.816287 17.0669 0.498386C16.278 0.167432 15.4319 -0.0019684 14.5777 1.7256e-05C13.3793 1.7256e-05 12.2101 0.331444 11.194 0.957473C10.9509 1.10723 10.72 1.27172 10.5012 1.45093C10.2824 1.27172 10.0515 1.10723 9.80841 0.957473C8.79233 0.331444 7.62309 1.7256e-05 6.42469 1.7256e-05C5.56175 1.7256e-05 4.72554 0.166958 3.93552 0.498386C3.17224 0.817538 2.48431 1.27663 1.89362 1.86092C1.30535 2.4406 0.835424 3.13124 0.510475 3.89367C0.172589 4.68664 0 5.52871 0 6.39533C0 7.21285 0.165297 8.06474 0.493459 8.93137C0.768144 9.6556 1.16194 10.4068 1.66512 11.1654C2.46243 12.3659 3.55874 13.618 4.92001 14.8872C7.17582 16.9912 9.40976 18.4446 9.50456 18.5035L10.0807 18.8766C10.3359 19.0411 10.6641 19.0411 10.9193 18.8766L11.4954 18.5035C11.5902 18.4421 13.8217 16.9912 16.08 14.8872C17.4412 13.618 18.5375 12.3659 19.3349 11.1654C19.838 10.4068 20.2343 9.6556 20.5065 8.93137C20.8347 8.06474 21 7.21285 21 6.39533C21.0024 5.52871 20.8298 4.68664 20.4919 3.89367V3.89367Z"
            fill="white"
          />
        </svg>
      {:else}
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
        </svg>{/if}
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
</article>
