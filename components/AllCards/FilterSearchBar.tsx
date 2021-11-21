import { IFilterSearchBarProps } from "../../utils/types";

const FilterSearchBar = ({
  searchValue,
  setSearchValue,
}: IFilterSearchBarProps): JSX.Element => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        className="focus-visible:outline-none bg-gray-700 md:bg-transparent border-b-2 border-white w-72 py-2"
      />
    </div>
  );
};

export default FilterSearchBar;
