import { useEffect, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";

import { ICard, IDeckProps } from "../utils/types";

const Deck = ({ cards }: IDeckProps): JSX.Element => {
  const [currentCards, setCurrentCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    // Convert map into list
    const orderedDeck = Object.values(cards).sort((a, b) => a.order - b.order);
    setCurrentCards(orderedDeck);
  }, []);

  const onDrop = ({ addedIndex, removedIndex }): void => {
    // Reorder cards in state
    setCurrentCards((oldCards) => {
      const newCards = [...oldCards];
      const movedCard = newCards.splice(removedIndex, 1);
      newCards.splice(addedIndex, 0, movedCard[0]);
      return newCards;
    });
  };

  const renderCards = () => {
    return currentCards.map(({ id, name }: ICard) => {
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
      <Container onDrop={onDrop}>{renderCards()}</Container>
    </div>
  );
};

export default Deck;
