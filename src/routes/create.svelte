<script>
  import Navbar from "../Components/Navbar.svelte";
  import { fade } from "svelte/transition";
</script>

<Navbar />
<div in:fade class="flex flex-col w-full h-full items-center justify-center my-auto mt-20 lg:mt-40">
  <div
    class="flex flex-col items-center justify-center  border-dashed  border-4 py-32 w-11/12 md:w-full max-w-xl mx-4 shadow-md border-light_dark"
  >
    <label
      for="input"
      class="bg-light_dark py-3.5 px-8 rounded-lg font-semibold text-dark text-2xl duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg flex gap-2 items-center"
    >
      <svg
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2955 13.9968L18.6223 16.6582M15.2955 13.9968V25.9731V13.9968ZM15.2955 13.9968L11.9688 16.6582L15.2955 13.9968Z"
          stroke="#023047"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.02594 10.1604C4.76737 10.4771 3.66777 11.2424 2.93372 12.3127C2.19967 13.383 1.8817 14.6844 2.03955 15.9726C2.19741 17.2608 2.82022 18.447 3.79097 19.3083C4.76173 20.1697 6.01361 20.6469 7.31141 20.6503H8.64211"
          stroke="#023047"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.3921 7.52688C19.9372 5.72587 18.8146 4.16517 17.2518 3.16118C15.6889 2.15718 13.8028 1.785 11.9757 2.12009C10.1486 2.45518 8.51729 3.47246 7.41244 4.96572C6.30758 6.45898 5.81186 8.31648 6.02576 10.1617C6.02576 10.1617 6.22935 11.3354 6.64587 12.0007"
          stroke="#023047"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.9493 20.6503C22.8889 20.6497 23.8176 20.4501 24.6744 20.0646C25.5313 19.6792 26.2967 19.1166 26.9205 18.414C27.5442 17.7114 28.0121 16.8847 28.2933 15.9882C28.5745 15.0918 28.6627 14.1459 28.552 13.2129C28.4413 12.2799 28.1343 11.381 27.6511 10.5752C27.168 9.76941 26.5196 9.07509 25.7488 8.53793C24.978 8.00078 24.1021 7.63296 23.1789 7.4587C22.2557 7.28443 21.306 7.30767 20.3924 7.52688L18.6226 8.0086"
          stroke="#023047"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      Upload
    </label>
    <input class="hidden" type="file" id="input" />
    <div class="text-light_dark text-center mt-3">upload here your image or video file.</div>
  </div>
</div>
