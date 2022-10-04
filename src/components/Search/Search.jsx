import useSearchResults from '../hooks/use-search-results';
import SearchForm from '../Search/SearchForm';
import SearchResults from './SearchResults.jsx';
import { FormButton } from '../FormControl/FormControl.jsx';

export default function search() {
  const {
    infiniteScrollRef,
    nextPage,
    pokemon,
    setPokemon,
    searchResults,
    searchPokedex,
  } = useSearchResults();

  return (
    <div>
      <SearchForm pokemon={pokemon} 
        setPokemon={setPokemon} onSubmit={searchPokedex} />
      <SearchResults results={searchResults} 
        infiniteScrollRef={infiniteScrollRef}  />
      <FormButton onClick={nextPage}>more</FormButton>
    </div>
  );
}
