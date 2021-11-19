/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

import { ICard, ICardsMap, IUseFilterSearchProps } from "../utils/types";

const DEBOUNCE_TIME = 500;

const useFilterSearch = ({ allCards }: IUseFilterSearchProps) => {
  const [filteredCards, setFilteredCards] = useState<ICardsMap>(allCards);
  const [searchValue, setSearchValue] = useState<string>("");

  /**
   * @description Check if card is part of search value
   * @param {ICard} card current card object
   * @param {string} value search value
   * @returns
   */
  const checkIfPartOfSearch = (card: ICard, value: string) => {
    const { name, category, description } = card;
    const lowerCaseSearchValue = value.toLowerCase();
    const inName = name.toLowerCase().includes(lowerCaseSearchValue);
    const inDescription = description
      .toLowerCase()
      .includes(lowerCaseSearchValue);
    const inCategory = category.toLowerCase().includes(lowerCaseSearchValue);

    return inName || inDescription || inCategory;
  };

  /**
   * @description Filter cards based on search value
   * @param {string} value search value
   * @returns void
   */
  const filterCardsBasedOnSearchValue = (value: string) => {
    if (value === "") {
      setFilteredCards(allCards);
      return;
    }

    setFilteredCards((currentFilteredCards) => {
      const cardsFromSearch = Object.entries(currentFilteredCards).reduce(
        (acc, [id, card]) => {
          const isPartOfSearch = checkIfPartOfSearch(card, value);
          if (isPartOfSearch) {
            return { ...acc, [id]: card };
          }
          return acc;
        },
        {}
      );

      return cardsFromSearch;
    });
  };

  /**
   * Debounced function of filterCardsBasedOnSearchValue
   */
  const debouncedSearchCards = useCallback(
    debounce(filterCardsBasedOnSearchValue, DEBOUNCE_TIME),
    []
  );

  /**
   * useEffect to trigger on input value change
   */
  useEffect(() => {
    debouncedSearchCards(searchValue);
  }, [searchValue, allCards]);

  return {
    filteredCards,
    searchValue,
    setSearchValue,
  };
};

export default useFilterSearch;
