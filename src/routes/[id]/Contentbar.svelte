<script>
	import { page } from '$app/stores';
  import { carcompanyname , carcompanyid ,contentSearch , carmodal } from '$lib/store/store';
	import Searchbar from '../../lib/components/Searchbar.svelte';
	$: data2 = $carmodal
  

	$: filteredCar = data2.filter((data2) => 
  data2.carCompanyId === $page.params.id 
   )
 
	console.log(filteredCar);

// Function to filter content area cards based on search keyword

</script>
<div class="w-[70%] mx-auto my-4">
	<Searchbar />
</div>
<div class="grid grid-cols-1 md:grid-cols-2 px-4 pb-4 lg:grid-cols-3 gap-3 ">
	{#each filteredCar as data}
		{#each data.modals as carmodal}
   
			<div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{carmodal.modalName}</div>
					<p class="text-gray-700 text-base">{carmodal.modaldesc}</p>
				</div>
			</div>
 
		{/each}
	{/each}
</div>
