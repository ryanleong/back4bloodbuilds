import { useEffect, useState } from "react";

import { ICard, IUseDeckProps, IUseDeckState } from "../utils/types";

const useDeck = ({ initialCards }: IUseDeckProps) => {
  const [deckCards, setDeckCards] = useState<IUseDeckState>({});

  useEffect(() => {
    setDeckCards(initialCards);
  }, [initialCards]);

  const addToDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      const newDeckCards = { ...oldDeckCards };
      newDeckCards[card.id] = card;
      return newDeckCards;
    });
  };

  const removeFromDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      const newDeckCards = { ...oldDeckCards };
      delete newDeckCards[card.id];
      return newDeckCards;
    });
  };

  return {
    deckCards,
    addToDeck,
    removeFromDeck,
  };
};

export default useDeck;
