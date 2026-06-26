import { useState, useEffect } from "react";

export default function CardGrid({onCardClick}){

    const [pokemonList, setPokemonList]=useState([]);
    const [loading, setLoding]=useState(true);

    useEffect(()=>{
        const fetchPokemonData = async () => {
        try {
            const pokemonIds = [1, 4, 7, 25, 39, 52, 94, 133, 143, 150, 249, 384];
            const fetchedPokemon = [];

            for(let i=0; i<pokemonIds.length; i++){
                const id=pokemonIds[i];
                const responce=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data=await responce.json();

                fetchedPokemon.push({
                    id:data.id,
                    name: data.name.toUpperCase(),
                    image: data.sprites.front_default // image url
                })
            }
            setPokemonList(fetchedPokemon);
            setLoding(false);
        } catch (error) {
            console.log(error);
            setLoding(false);
        }
       }

       fetchPokemonData();

    }, []);

    const suffleCards=()=>{
        const suffled=[...pokemonList].sort(()=>Math.random()-0.5);
        setPokemonList(suffled);
    }

    const handelCardClickInternal=(id)=>{
        onCardClick(id);
        suffleCards();
    }   

    if (loading){
        return  <div className="loading">Catching 'em all... Please wait!</div>;
    }

    return <div className="grid-container">
        {pokemonList.map((pokemon)=>(
            <div
                key={pokemon.id}
                className="card"
                onClick={()=>handelCardClickInternal(pokemon.id)}
            >
                <img src={pokemon.image} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
            </div>
        ))}
    </div>
}