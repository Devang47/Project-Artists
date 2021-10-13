<script>
  import Navbar from "../Components/Navbar.svelte";
</script>

<Navbar />
<div class="flex flex-col w-full h-full items-center justify-center my-auto mt-20 lg:mt-40">
  <div class="flex flex-col items-center justify-center  border-dashed border-4 py-32 w-11/12 md:w-full max-w-xl mx-4 shadow-md border-input_bg">
    <label
      for="input"
      class="bg-light_dark py-3 px-6 rounded-md font-semibold text-dark text-2xl duration-75 active:scale-95 hover:scale-105 shadow hover:shadow-lg"
    >
      Upload
    </label>
    <input class="hidden" type="file" id="input" />
    <div class="text-light_dark text-center mt-3">upload here your image or video file.</div>
  </div>
</div>
