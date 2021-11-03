export interface ICard {
  id: number;
  name: string;
}

export interface IAllCardsProps {
  cards?: Array<ICard>;
}
