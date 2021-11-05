import { useContext } from "react";

import CardsContext from "../contexts/CardsContext";
import { IAllCardsProps, ICard, ICardsMap } from "../utils/types";

const AllCards = (props: IAllCardsProps): JSX.Element => {
  const { deckCards, addToDeck, removeFromDeck } = props;
  const allCards = useContext<ICardsMap>(CardsContext);

  /**
   * @description Card on click handler
   * @param {ICard} card Card object clicked
   */
  const onClick = (card: ICard) => {
    if (!deckCards[card.id]) {
      addToDeck(card);
    } else {
      removeFromDeck(card);
    }
  };

  /**
   * @description Render card list
   * @returns {JSX.Element} Card list
   */
  const renderCards = () => {
    // TODO pagination
    // TODO filter
    const allCardsArr = Object.values(allCards);

    return allCardsArr.map((card) => {
      const { id, name } = card;
      const isActive = deckCards[id] ? "border-red-400" : "";

      return (
        <button
          key={id}
          onClick={() => onClick(card)}
          className={`h-80 w-60 mr-4 mb-4 rounded-md bg-gray-400 border-gray-400 border-4 ${isActive}`}
        >
          id: {id}, name: {name}
        </button>
      );
    });
  };

  return <div className="flex flex-1 flex-wrap ml-8">{renderCards()}</div>;
};

export default AllCards;
