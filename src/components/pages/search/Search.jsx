import "./search.scss";
import SearchPanel from "./searchPanel/SearchPanel";
import SearchItem from "./../../templates/searchItem/SearchItem";
const Search = () => {
  return (
    <section className="search">
      <SearchPanel/>
      <div className="searchResults">
        <SearchItem/>
      </div>
    </section>
  );
};
export default Search;
