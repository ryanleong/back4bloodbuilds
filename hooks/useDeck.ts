import { useEffect, useState } from "react";

import { ICard, IUseDeckProps, IUseDeckState } from "../utils/types";

const useDeck = ({ initialCardsIds, allCards }: IUseDeckProps) => {
  const [deckCards, setDeckCards] = useState<IUseDeckState>({});

  useEffect(() => {
    const deck = initialCardsIds.reduce((acc, id, index) => {
      const card = allCards[id];
      return {
        ...acc,
        [id]: { ...card, order: index },
      };
    }, {});

    setDeckCards(deck);
  }, [initialCardsIds, allCards]);

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
