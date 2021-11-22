import { IFilterSearchBarProps } from "../../utils/types";

const FilterSearchBar = ({
  searchValue,
  setSearchValue,
}: IFilterSearchBarProps): JSX.Element => {
  const inputWidth = "w-full md:w-72";
  const inputBorder = "border-b-2 border-white";
  const inputStyles = [inputWidth, inputBorder].join(" ");

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        className={`focus-visible:outline-none bg-transparent py-2 ${inputStyles}`}
      />
    </div>
  );
};

export default FilterSearchBar;
