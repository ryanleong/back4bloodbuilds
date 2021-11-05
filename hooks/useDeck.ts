import { useEffect, useState } from "react";

import { ICard, ICardsMap, IUseDeckProps } from "../utils/types";

const useDeck = ({ initialCardsIds, allCards }: IUseDeckProps) => {
  const [deckCards, setDeckCards] = useState<Array<ICard>>([]);
  const [deckCardsMap, setDeckCardsMap] = useState<ICardsMap>({});

  useEffect(() => {
    const deckMap = initialCardsIds.reduce((acc, id, index) => {
      const card = allCards[id];
      return { ...acc, [id]: card };
    }, {});

    const deck = initialCardsIds.map((id, index) => {
      return { ...allCards[id] };
    });

    setDeckCards(deck);
    setDeckCardsMap(deckMap);
  }, [initialCardsIds, allCards]);

  const addToDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      return [...oldDeckCards, card];
    });

    setDeckCardsMap((oldDeckCards) => {
      if (!oldDeckCards[card.id]) {
        const newDeckCards = { ...oldDeckCards };
        newDeckCards[card.id] = card;
        return newDeckCards;
      }

      return oldDeckCards;
    });
  };

  const removeFromDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      const newDeckCards = oldDeckCards.filter(({ id }) => {
        return id !== card.id;
      });

      return newDeckCards;
    });

    setDeckCardsMap((oldDeckCards) => {
      const newDeckCards = { ...oldDeckCards };
      delete newDeckCards[card.id];
      return newDeckCards;
    });
  };

  const updateDeckCardsOrder = ({ addedIndex, removedIndex }) => {
    setDeckCards((oldCards) => {
      const newCards = [...oldCards];
      const movedCard = newCards.splice(removedIndex, 1);
      newCards.splice(addedIndex, 0, movedCard[0]);
      return newCards;
    });
  };

  return {
    deckCards,
    deckCardsMap,
    updateDeckCardsOrder,
    addToDeck,
    removeFromDeck,
  };
};

export default useDeck;
