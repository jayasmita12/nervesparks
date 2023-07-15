<script>
    // export let contentSearch
	import { carcompanyname , carcompanyid ,contentSearch } from '$lib/store/store';

</script>
<div class="relative  w-full">
	<span class="absolute inset-y-0 left-2  flex items-center">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>          
	</span>
	<input
        bind:value={$contentSearch}
		class="py-2 pl-9 pr-4 border  placeholder:text-base rounded-xl bg-gray-200 focus:outline-none focus:ring-secondary-500 focus:border-secondary-500 w-full"
		type="text"
		placeholder="Search..."
	/>
</div>
