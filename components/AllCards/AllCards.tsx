import { useContext } from "react";
import Image from "next/image";

import CardsContext from "../../contexts/CardsContext";
import { IAllCardsProps, ICard, ICardsMap } from "../../utils/types";
import usePagination from "../../hooks/usePagination";
import useFilterSearch from "../../hooks/useFilterSearch";
import FilterSearchBar from "./FilterSearchBar";

const AllCards = (props: IAllCardsProps): JSX.Element => {
  const { deckCards, addToDeck, removeFromDeck } = props;
  const allCards = useContext<ICardsMap>(CardsContext);

  const { filteredCards, searchValue, setSearchValue } = useFilterSearch({
    allCards,
  });

  const { page, totalNumOfPages, rangeOfItemsOnPage, goToPage } = usePagination(
    {
      numOfItems: Object.values(filteredCards).length,
    }
  );

  const [firstItemOnPage, lastItemOnPage] = rangeOfItemsOnPage;

  /**
   * @description Card on click handler
   * @param {ICard} card Card object clicked
   */
  const onClick = (card: ICard) => {
    if (!deckCards[card.id]) {
      addToDeck(card);
    } else {
      removeFromDeck(card);
    }
  };

  /**
   * @description Render card list
   * @returns {JSX.Element} Card list
   */
  const renderCards = () => {
    // TODO filter
    const allCardsArr = Object.values(filteredCards);
    const cardsOnPage = allCardsArr.slice(firstItemOnPage, lastItemOnPage + 1);

    return cardsOnPage.map((card) => {
      const { id, name } = card;
      const isActive = deckCards[id] ? "border-red-400 border-2" : "";

      return (
        <button
          key={id}
          onClick={() => onClick(card)}
          className={`h-80 w-60 mr-4 mb-4 rounded-lg border-0 overflow-hidden ${isActive}`}
        >
          <Image
            src={`/images/cards/${card.filename}`}
            alt={name}
            width="240"
            height="320"
          />
        </button>
      );
    });
  };

  return (
    <div className="flex-1 ml-8">
      <FilterSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="flex flex-wrap">{renderCards()}</div>

      <div className="text-center">
        <button
          className="border-0 mx-4 text-xl"
          onClick={() => goToPage(page - 1)}
        >
          &larr;
        </button>
        <span className="text-xl">
          {page + 1} of {totalNumOfPages}
        </span>
        <button
          className="border-0 mx-4 text-xl"
          onClick={() => goToPage(page + 1)}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default AllCards;
