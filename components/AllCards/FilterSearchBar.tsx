import { IFilterSearchBarProps } from "../../utils/types";

const FilterSearchBar = ({
  searchValue,
  setSearchValue,
}: IFilterSearchBarProps): JSX.Element => {
  const inputWidth = "w-full";
  const inputBorder = "border-2 border-white rounded-md";
  const inputStyles = [inputWidth, inputBorder].join(" ");

  return (
    <div className="mb-6 w-full md:w-72 relative">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        className={`focus-visible:outline-none bg-transparent py-2 pl-3 pr-7 ${inputStyles}`}
      />

      {searchValue !== "" && (
        <button
          className="absolute top-2 right-2"
          onClick={() => setSearchValue("")}
        >
          <span className="material-icons">cancel</span>
        </button>
      )}
    </div>
  );
};

export default FilterSearchBar;
