<script>
    import { onMount } from 'svelte';
	import Sidebar from './Sidebar.svelte';
    import {fade , fly} from "svelte/transition"
	import Contentbar from '../../routes/[id]/Contentbar.svelte';
    let isOpen = false;
    function toggleDrawer() {
      isOpen = !isOpen;
    }
    onMount(() => {
      isOpen = false;
    });
</script>

<nav class="bg-gray-800">
    <div class="px-4 sm:px-7">
      <div class="flex items-center justify-between h-16">
        <div class="flex justify-between">
          <div class="flex  space-x-2 md:space-x-0">
            <button on:click={toggleDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" class="w-6 h-6 flex self-center sm:hidden ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                               
            </button>
            <a href="/" class="text-white  font-bold text-xl">NERVESPARKS</a>
          </div>
        </div>
      </div>
    </div>
</nav>
  
{#if isOpen}
<div class="md:hidden w-[50%] absolute z-10" transition:fly={{x:-100 , duration:400}} class:hidden={!isOpen }>
    <Sidebar/>
</div>
{/if}