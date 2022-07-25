<script type="ts">
    import PokemonCard from "../components/pokemonCard.svelte";
    import pokemon from "../stores/pokestore";

    let searchTerm = "";
    let filteredPokemon: any[] = [];

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemon.filter((p: any) => p.name.includes(searchTerm.toLowerCase()));
        }
        else {
            filteredPokemon = [...$pokemon];
        }
    }
</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<input type="text" placeholder="Search Pokemon" bind:value={searchTerm}
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200" />

<div class="py-4 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
    <PokemonCard {pokeman} />
    {/each}
</div>
