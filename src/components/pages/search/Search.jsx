import "./search.scss";
import SearchPanel from "./searchPanel/SearchPanel";
import SearchItem from "./../../templates/searchItem/SearchItem";
import { useEffect, useState } from "react";
const Search = () => {
  // const postData = async () => {
  //   const response = await fetch(
  //     "http://api.duma.gov.ru/api/b7886da6f2500ed765c67bd8e9904b3eb83b1c23/topics.json"
  //   );
  //   return await response.json();
  // };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.duma.gov.ru/api/0fe8301c7a1246606877db2f9835bb9c4d9b24a5/topics.json?app_token=appe6f512ef4104f66ef4aa2f8d7e2fcec46b2fc7c3",
      {
        mode: "no-cors",
      }
    ).then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
    
  }, []);
  // useEffect(() => {
  //   fetch(
  //     "http://api.duma.gov.ru/api/0fe8301c7a1246606877db2f9835bb9c4d9b24a5/topics.json?app_token=appe6f512ef4104f66ef4aa2f8d7e2fcec46b2fc7c3", {mode: "no-cors"}
  //   ).then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     } throw response;
  //   })
  //   .then(
  //     (result) => {
  //       setIsLoaded(true);
  //       setItems(result);
  //     },
  //     (error) => {
  //       setIsLoaded(true);
  //       setError(error);
  //     }
  //   )
    
  // }, []);
  console.log(items)

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
