export interface ICard {
  id: number;
  name: string;
  category: string;
  description: string;
}

export interface IHomeProps {
  allCards: ICardsContext;
}

export interface IDeckProps {
  cards: Array<ICard>;
}

export interface IAllCardsProps {
  cardsInDeck: ICardsContext;
  onCardClick: (id: number) => void;
}

export interface ICardsContext {
  [id: string]: ICard;
}
