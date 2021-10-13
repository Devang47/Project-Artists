<script>
  import { fade } from "svelte/transition";

  import Navbar from "../Components/Navbar.svelte";
</script>

<Navbar />

<div in:fade class="pb-10 ">
  <header class="bg-banner h-28 md:h-40 w-full" />
  <div class="bg-white rounded-full h-32 w-32 mx-auto -mt-16 md:h-40 md:w-40 md:-mt-20">
    <img src="" alt="" />
  </div>

  <div class="text-center text-white mt-4 text-3xl font-semibold md:text-4xl">Devang Saklani</div>

  <div class="mt-16 grid grid-rows-3 gap-4 text-white w-10/12 mx-auto max-w-md md:mt-26 font-sans">
    <div class="flex items-center justify-between border-b-2 border-input_bg">
      <div class="">Artist Points:</div>
      <div class="ml-auto">1000</div>
    </div>
    <div class="flex items-center justify-between border-b-2 border-input_bg">
      <div class="">Artist Points:</div>
      <div class="ml-auto">1000</div>
    </div>
    <div class="flex items-center justify-between border-b-2 border-input_bg">
      <div class="">Artist Points:</div>
      <div class="ml-auto">1000</div>
    </div>
  </div>

  <button
    class="rounded-md bg-input_bg py-2 px-4 mx-auto text-center text-white font-medium mt-6 block duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg"
    >Convert points</button
  >

  <button
    class="rounded-md bg-light_dark py-2 px-4 mx-auto text-center text-dark font-bold mt-8 block duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg"
    >Log out</button
  >
</div>
