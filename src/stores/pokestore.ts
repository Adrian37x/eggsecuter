import { writable } from "svelte/store";

const pokemon = writable([]);

const fetchPokemon = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

    fetch(url).then(async res => {
        const data = await res.json();
    
        const loadedPokemon = data.results.map((data: any, index: number) => {
            return {
                id: index + 1,
                name: data.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                }.png`
            }
        });
    
        pokemon.set(loadedPokemon);
    }).catch(() => {});
}
fetchPokemon();

export default pokemon;
