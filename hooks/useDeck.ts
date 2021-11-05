import { useEffect, useState } from "react";

import { ICard, ICardsMap, IUseDeckProps } from "../utils/types";

/**
 * @description Query param key for cards in deck
 */
const CARD_QUERY_PARAM = "c";

const useDeck = ({ initialCardsIds, allCards }: IUseDeckProps) => {
  const [deckCards, setDeckCards] = useState<Array<ICard>>([]);
  const [deckCardsMap, setDeckCardsMap] = useState<ICardsMap>({});

  /**
   * @description Initialize cards from query params
   */
  useEffect(() => {
    if (!initialCardsIds || initialCardsIds.length < 1) {
      return;
    }

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

  /**
   * @description Update query params with current deck
   * @param {Array<ICard>} updatedDeckCards Updated list of cards
   */
  const updatePath = (updatedDeckCards: Array<ICard>): void => {
    /**
     * Use history.pushState instead of NEXTJS router.push with shallow
     * as we don't want to update the page's history, which will also trigger
     * a re-initialisation of useDeck
     */
    if (history.pushState) {
      const queryParams = updatedDeckCards.reduce((acc, { id }, index) => {
        const delimiter = index === 0 ? "?" : "&";
        return `${acc}${delimiter}${CARD_QUERY_PARAM}=${id}`;
      }, "");
      const newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        queryParams;
      window.history.pushState({ path: newurl }, "", newurl);
    }
  };

  /**
   * @description Add card to deck
   * @param {ICard} card Card object to be added
   */
  const addToDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      const newDeckCards = [...oldDeckCards, card];
      updatePath(newDeckCards);
      return newDeckCards;
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

  /**
   * @description Remove card from deck
   * @param {ICard} card Card object to be removed
   */
  const removeFromDeck = (card: ICard) => {
    setDeckCards((oldDeckCards) => {
      const newDeckCards = oldDeckCards.filter(({ id }) => {
        return id !== card.id;
      });

      updatePath(newDeckCards);
      return newDeckCards;
    });

    setDeckCardsMap((oldDeckCards) => {
      const newDeckCards = { ...oldDeckCards };
      delete newDeckCards[card.id];
      return newDeckCards;
    });
  };

  /**
   * @description Update order of cards in deck
   * @param {DropResult} param onDrop result from react-smooth-dnd
   */
  const updateDeckCardsOrder = ({ addedIndex, removedIndex }) => {
    setDeckCards((oldDeckCards) => {
      const newDeckCards = [...oldDeckCards];
      const movedCard = newDeckCards.splice(removedIndex, 1);
      newDeckCards.splice(addedIndex, 0, movedCard[0]);

      updatePath(newDeckCards);
      return newDeckCards;
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

export { useDeck as default, CARD_QUERY_PARAM };
