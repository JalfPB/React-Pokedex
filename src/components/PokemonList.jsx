import { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { getPokemonList, getPokemonDetails } from "../services/api";
//import "../styles/PokemonList.css";

export function PokemonList() {
  const [pokemon, setPokemon] = useState([]); // Lista de Pokémon
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para transformar los datos de la API al formato esperado por `PokemonCard`
  const mapPokemonData = (pokemonData) => {
    return {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.other["official-artwork"].front_default,
      type: pokemonData.types.map((type) => type.type.name).join("/"),
      stats: {
        hp: pokemonData.stats[0].base_stat,
        attack: pokemonData.stats[1].base_stat,
        defense: pokemonData.stats[2].base_stat,
        speed: pokemonData.stats[5].base_stat,
        specialAttack: pokemonData.stats[3].base_stat,
        specialDefense: pokemonData.stats[4].base_stat,
      },
      color: getTypeColor(pokemonData.types[0].type.name), // Colores según el tipo
    };
  };

  // Función para obtener la lista y los detalles de los Pokémon
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonList = await getPokemonList(); // Obtenemos la lista de Pokémon
        const detailedPokemon = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const details = await getPokemonDetails(pokemon.url); // Obtenemos detalles de cada Pokémon
            return mapPokemonData(details); // Transformamos los datos
          })
        );
        setPokemon(detailedPokemon); // Actualizamos el estado con los datos completos
        setLoading(false); // Marcamos que terminó la carga
      } catch (error) {
        console.error("Error al cargar los Pokémon:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando Pokémon...</div>;
  }

  return (
    <div className="pokemon-list">
      {pokemon.map((poke, index) => (
        <PokemonCard key={index} pokemon={poke} />
      ))}
    </div>
  );
}

// Función para obtener el color según el tipo del Pokémon
// Función para obtener el color según el tipo del Pokémon
const getTypeColor = (types) => {
    // Definimos los colores de los tipos
    const typeColors = {
      Fire: "rgba(255, 69, 0, 0.8)",
      Water: "rgba(0, 191, 255, 0.8)",
      Grass: "rgba(34, 139, 34, 0.8)",
      Electric: "rgba(255, 215, 0, 0.8)",
      Psychic: "rgba(255, 0, 255, 0.8)",
      Normal: "rgba(255, 223, 186, 0.8)",
      Fairy: "rgba(255, 182, 193, 0.8)",
      Ghost: "rgba(102, 0, 204, 0.8)",
      Rock: "rgba(169, 169, 169, 0.8)",
      Fighting: "rgba(255, 0, 0, 0.8)",
      Poison: "rgba(128, 0, 128, 0.8)",
      Ground: "rgba(210, 180, 140, 0.8)",
      Ice: "rgba(173, 216, 230, 0.8)",
      Dragon: "rgba(72, 61, 139, 0.8)",
      Dark: "rgba(47, 79, 79, 0.8)",
      Steel: "rgba(192, 192, 192, 0.8)",
      Bug: "rgba(173, 255, 47, 0.8)",
      Flying: "rgba(135, 206, 235, 0.8)",
    };
  
    // Si 'types' es un array, podemos obtener el color para cada tipo y hacer un gradiente o combinar los colores
    if (Array.isArray(types)) {
      const colors = types.map(type => typeColors[type] || "rgba(128, 128, 128, 0.8)");
      return colors.length > 1 ? `linear-gradient(45deg, ${colors.join(', ')})` : colors[0];
    }
  
    // Si solo es un tipo, retornamos el color correspondiente
    return typeColors[types] || "rgba(128, 128, 128, 0.8)"; // Color por defecto si no coincide
  };
  
