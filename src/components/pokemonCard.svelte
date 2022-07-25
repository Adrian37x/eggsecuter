<script type="ts">
	import { fade } from "svelte/transition";

	export let pokeman: any;
</script>

<a
	href={`/pokemon/${pokeman.id}`} transition:fade
	class="bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
	<img class="h-35 w-35" src={pokeman.image} alt={pokeman.name} />
	<h2 class="capitalize text-2xl mb-4">{pokeman.id}. {pokeman.name}</h2>
</a>
