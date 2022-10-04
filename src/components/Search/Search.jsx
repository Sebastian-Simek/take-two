import React from 'react'
import useSearchResults from '../hooks/use-search-results'
import SearchForm from '../Search/SearchForm'
import { FormButton } from '../FormControl/FormControl.jsx'

export default function search() {
    const {
        infiniteScrollRef,
        nextPage,
        pokemon,
        setPokemon,
        searchParams,
        searchResults,
        searchPokedex,
    } = useSearchResults();

  return (
    <div>
      <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
    </div>
  )
}