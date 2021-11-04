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
}

export interface ICardsMap {
  [id: string]: ICard;
}

export interface IUseDeckProps {
  initialCards: IUseDeckState;
}

export interface IUseDeckState {
  [id: string]: IDeckCard;
}
