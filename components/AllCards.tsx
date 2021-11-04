import { useContext } from "react";

import CardsContext from "../contexts/CardsContext";
import { IAllCardsProps, ICardsMap } from "../utils/types";

const AllCards = (props: IAllCardsProps): JSX.Element => {
  const { deckCards } = props;
  const allCards = useContext<ICardsMap>(CardsContext);

  const renderCards = () => {
    // TODO pagination
    const allCardsArr = Object.values(allCards);

    return allCardsArr.map(({ id, name }) => {
      const isActive = deckCards[id] ? "border-red-400" : "";

      return (
        <div
          key={id}
          className={`h-80 w-60 mr-4 mb-4 rounded-md bg-gray-400 border-gray-400 border-4 ${isActive}`}
        >
          id: {id}, name: {name}
        </div>
      );
    });
  };

  return <div className="flex flex-1 flex-wrap ml-8">{renderCards()}</div>;
};

export default AllCards;
