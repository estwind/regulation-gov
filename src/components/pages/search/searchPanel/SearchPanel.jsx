import Select from "../../../templates/select/Select";
import ".././search.scss";
import { options } from "../../../utilities/utilities";
const SearchPanel = () => {
  return (
      <div className="searchPanel">
          <form>
              <Select label="Вид" options={options}/>
          </form>
      </div>
  );
};
export default SearchPanel;