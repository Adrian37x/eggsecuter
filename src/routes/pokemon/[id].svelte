<script context="module" type="ts">
    export async function load({params}: any) {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        let pokeman = {name: ""};

        await fetch(url)
        .then(async res => {
            pokeman = await res.json();
        }).catch(() => {});
        
        return {props: {pokeman}}
    }
</script>
<script type="ts">
    export let pokeman: any;

    const type = pokeman.types[0].type.name;
</script>

<h1 class="text-4xl text-center my-8 capitalize">{pokeman.name}</h1>
<p class="text-center">
    Type: <strong class="capitalize">{type}</strong> | 
    Height: <strong>{pokeman.height}</strong> | 
    Weight: <strong>{pokeman.weight}</strong>
</p>

<img class="card-image mx-auto h-40 w-40" src={pokeman.sprites["front_default"]} alt="pokeman.name" />
