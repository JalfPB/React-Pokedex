// PokemonList.jsx
import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PokemonCard } from "./PokemonCard";
import { PokemonFilter } from "./PokemonFilter";
import { PokemonSearch } from "./PokemonSearch";
import { fetchAllPokemons } from "../services/api";
import "../styles/PokemonList.css";

export function PokemonList() {
  const { data: pokemonList, loading, error } = useFetch(fetchAllPokemons);
  const [filteredTypes, setFilteredTypes] = useState([]); // Filtro de tipos
  const [searchTerm, setSearchTerm] = useState(""); // Estado para manejar la búsqueda por nombre

  // Función para manejar el filtro de tipos
  const handleFilter = (type) => {
    if (type === "All") {
      setFilteredTypes([]);
    } else {
      if (filteredTypes.includes(type)) {
        setFilteredTypes(filteredTypes.filter((t) => t !== type));
      } else if (filteredTypes.length < 2) {
        setFilteredTypes([...filteredTypes, type]);
      }
    }
  };

  // Función para manejar la búsqueda por nombre
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); // Guardamos el término de búsqueda en minúsculas
  };

  // Asegurarnos de que pokemonList siempre es un array antes de usar .filter()
  const visiblePokemons = (pokemonList || []).filter((pokemon) => {
    const matchesType = filteredTypes.length
      ? pokemon.types.every((type) =>
          filteredTypes.includes(type.name.toLowerCase())
        )
      : true;

    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm);

    return matchesType && matchesSearch;
  });

  if (loading || !pokemonList || pokemonList.length === 0) {
    return (
      <div className="loading-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <PokemonSearch handleSearch={handleSearch} />
      <PokemonFilter filteredTypes={filteredTypes} handleFilter={handleFilter} />
      <div id="pokemonList">
        {visiblePokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
