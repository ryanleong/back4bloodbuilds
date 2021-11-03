export interface ICard {
  id: number;
  name: string;
}

export interface IDeckProps {
  cards?: Array<ICard>;
}

export interface IAllCardsProps {
  cards?: Array<ICard>;
}
