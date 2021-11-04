import { useEffect, useState } from "react";

import { ICard, IUseDeckProps, IUseDeckState } from "../utils/types";

const useDeck = ({ initialCards }: IUseDeckProps) => {
  const [deckCards, setDeckCards] = useState<IUseDeckState>({});

  useEffect(() => {
    setDeckCards(initialCards);
  }, []);

  const addToDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      oldDeckCards[card.id] = card;
      return oldDeckCards;
    });
  };

  const removeFromDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      delete oldDeckCards[card.id];
      return oldDeckCards;
    });
  };

  return {
    deckCards,
    addToDeck,
    removeFromDeck,
  };
};

export default useDeck;
