import { useContext, useMemo, useState } from "react";
import Image from "next/image";

import CardsContext from "../../contexts/CardsContext";
import { IAllCardsProps, ICard, ICardsMap } from "../../utils/types";
import usePagination from "../../hooks/usePagination";
import useFilterSearch from "../../hooks/useFilterSearch";
import FilterSearchBar from "./FilterSearchBar";

const AllCards = (props: IAllCardsProps): JSX.Element => {
  const {
    deckCards,
    addToDeck,
    removeFromDeck,
    isCardSelectOpenMobile,
    setIsCardSelectOpenMobile,
  } = props;

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
   * @description sort all cards alphabetically
   */
  const sortedAllCardsArr = useMemo((): ICard[] => {
    const allCardsArr = Object.values(filteredCards);
    return allCardsArr.sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredCards]);

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
    const cardsOnPage = sortedAllCardsArr.slice(
      firstItemOnPage,
      lastItemOnPage + 1
    );

    return cardsOnPage.map((card) => {
      const { id, name } = card;
      const isActive = deckCards[id] ? "border-red-600 border-2" : "";

      const cardDimensions = `aspect-w-12 aspect-h-16`;

      return (
        <button
          key={id}
          onClick={() => onClick(card)}
          className={`relative ${cardDimensions} rounded-lg border-0 overflow-hidden ${isActive}`}
        >
          <Image
            src={`/images/cards/${card.filename}`}
            alt={`${name} - Back4Blood card`}
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsXQEAAcgBN96ScDoAAAAASUVORK5CYII="
          />
        </button>
      );
    });
  };

  const containerPositions =
    "fixed md:relative top-0 md:top-auto left-0 md:left-auto";
  const containerDimensions = "w-full md:w-auto h-full md:h-auto";
  const containerSpcaers = "md:ml-6 px-4 md:px-0 py-8 md:py-0";
  const containerBg = "bg-gray-700 md:bg-transparent";
  const conatinerOverflow = "overflow-scroll md:overflow-auto";
  const containerTransforms = `transform ${
    isCardSelectOpenMobile ? "translate-x-0" : "translate-x-full"
  } md:translate-x-0 transition-transform duration-150`;
  const containerStyles = [
    containerPositions,
    containerDimensions,
    containerSpcaers,
    containerBg,
    conatinerOverflow,
    containerTransforms,
  ];

  const cardGrid = "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";

  return (
    <div className={`flex-1 ${containerStyles.join(" ")}`}>
      <FilterSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className={`grid gap-4 ${cardGrid} mb-6`}>{renderCards()}</div>

      <div className="flex flex-row items-center justify-center">
        <button
          className="border-0 text-xl flex items-center"
          onClick={() => goToPage(0)}
        >
          <span className="material-icons">skip_previous</span>
        </button>
        <button
          className="border-0 text-xl flex items-center mr-4"
          onClick={() => goToPage(page - 1)}
        >
          <span className="material-icons">navigate_before</span>
        </button>

        <span className="text-lg">
          {page + 1} of {totalNumOfPages}
        </span>

        <button
          className="border-0 text-xl flex items-center ml-4"
          onClick={() => goToPage(page + 1)}
        >
          <span className="material-icons">navigate_next</span>
        </button>
        <button
          className="border-0 text-xl flex items-center"
          onClick={() => goToPage(totalNumOfPages - 1)}
        >
          <span className="material-icons">skip_next</span>
        </button>
      </div>

      <button
        className="absolute top-4 right-4 block md:hidden"
        onClick={() => setIsCardSelectOpenMobile(false)}
      >
        <span className="material-icons">close</span>
      </button>
    </div>
  );
};

export default AllCards;
