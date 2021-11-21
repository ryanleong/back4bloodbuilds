import { DropResult } from "react-smooth-dnd";

export interface ICard {
  id: number;
  name: string;
  category: string;
  description: string;
  filename: string;
}

export enum ECardCategoryColor {
  Brawn = "green-400",
  Discipline = "red-600",
  Fortune = "yellow-300",
  Reflex = "blue-200",
}

export interface IHomeProps {
  allCards: ICardsMap;
}

export interface IDeckProps {
  deckCards: Array<ICard>;
  updateDeckCardsOrder: (parms: DropResult) => void;
}

export interface IAllCardsProps {
  deckCards: ICardsMap;
  addToDeck: (card: ICard) => void;
  removeFromDeck: (card: ICard) => void;
}

export interface ICardsMap {
  [id: string]: ICard;
}

export interface IUseDeckProps {
  initialCardsIds: Array<string>;
  allCards: ICardsMap;
}

export interface IUsePaginationProps {
  numOfItems: number;
  itemsPerPage?: number;
}

export type TUsePaginationItemRange<T, K> = [T, K];

export interface IUseFilterSearchProps {
  allCards: ICardsMap;
}

export interface IFilterSearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
