export interface ICard {
  id: number;
  name: string;
  category: string;
  description: string;
}

export interface IDeckCard extends ICard {
  order?: number;
}

export interface IHomeProps {
  allCards: ICardsMap;
}

export interface IDeckProps {
  cards: IUseDeckState;
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

export interface IUseDeckState {
  [id: string]: IDeckCard;
}
