import { SearchBox, SearchInput } from "./styles";
import { useSearchStore } from "../../store/useSearchStore";


export function SearchBar() {
  const { search, setSearch } = useSearchStore();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearch}>
      <SearchBox>
        <SearchInput
          fullWidth
          label="Buscar episódio por nome"
          variant="filled"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBox>
    </form>
  );
}