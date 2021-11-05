import { Container, Draggable, DropResult } from "react-smooth-dnd";

import { ICard, IDeckProps } from "../utils/types";

const Deck = (props: IDeckProps): JSX.Element => {
  const { deckCards, updateDeckCardsOrder } = props;

  // TODO: Remove cards from deck

  const renderCards = () => {
    return deckCards.map(({ id, name }: ICard) => {
      return (
        <Draggable key={id}>
          <div className="bg-gray-400 h-10 w-full mb-2 rounded-sm">
            id: {id}, name: {name}
          </div>
        </Draggable>
      );
    });
  };

  return (
    <div className="w-80">
      <Container onDrop={updateDeckCardsOrder}>{renderCards()}</Container>
    </div>
  );
};

export default Deck;
