import "./search.scss";
import SearchPanel from "./searchPanel/SearchPanel";
import SearchItem from "./../../templates/searchItem/SearchItem";
import { useEffect } from "react";
const Search = () => {
  // const postData = async () => {
  //   const response = await fetch(
  //     "http://api.duma.gov.ru/api/b7886da6f2500ed765c67bd8e9904b3eb83b1c23/topics.json"
  //   );
  //   return await response.json();
  // };

  useEffect(() => {
    fetch(
      "http://api.duma.gov.ru/api/b7886da6f2500ed765c67bd8e9904b3eb83b1c23/topics.json",
      {
        mode: "no-cors",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section className="search">
      <SearchPanel />
      <div className="searchResults">
        <SearchItem />
      </div>
    </section>
  );
};
export default Search;
// method: 'POST',
// headers: {
//   'Origin': 'myregulationgov.com'
// },
