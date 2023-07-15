<script>
	import Searchbar from './Searchbar.svelte';
	import { carcompanyname , carcompanyid ,contentSearch } from '$lib/store/store';
</script>

<div
	class="px-2 shadow-lg shadow-slate-700 w-full h-full bg-white pt-2 pb-3 space-y-1 sm:px-5"
>

	{#each $carcompanyname as carcompany}
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href={`/${carcompany.id}`}
			class="text-black hover:text-blue-500 hover:bg-slate-100 block px-3 py-2 rounded-md text-base font-medium"
		>
			<span>{carcompany.name}</span>
			<p class="text-gray-400 font-normal text-[8px] leading-tight">{carcompany.description}</p>
		</a>
	{/each}
	<button
		class="w-full pr-6 border-2 py-1 hover:text-blue-600 font-semibold rounded hover:bg-gray-300"
		>+ Add new</button
	>
</div>
