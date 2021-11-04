import { useContext } from "react";

import CardsContext from "../contexts/CardsContext";
import { ICardsContext } from "../utils/types";

const AllCards = (): JSX.Element => {
  const allCards = useContext<ICardsContext>(CardsContext);

  const renderCards = () => {
    // TODO pagination
    const allCardsArr = Object.values(allCards);

    return allCardsArr.map(({ id, name }) => {
      const isActive = id === 3 ? "border-red-400" : "";

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
