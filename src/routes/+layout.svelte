<script>
    import "../app.css";
    import { onMount } from 'svelte';
	import Sidebar from "../lib/components/Sidebar.svelte";
	import Navbar from "../lib/components/Navbar.svelte";

  let isOpen = false;

  // Close the sidebar on mobile when the content is clicked
  onMount(() => {
    function closeSidebar(event) {
      if (isOpen && event.target.closest('.content-bar')) {
        isOpen = false;
      }
    }
    document.addEventListener('click', closeSidebar);
    return () => document.removeEventListener('click', closeSidebar);
  });
</script>
  
<div class="">
    <Navbar/>
    <div class="flex min-h-screen">
        <div class="hidden min-h-screen md:block md:w-[25%]">
            <Sidebar/>
        </div>
      <main class="w-full md:w-[75%]">
        <slot></slot>
      </main>
    </div>
</div>
  
 