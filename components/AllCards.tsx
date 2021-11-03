import { IAllCardsProps } from "../utils/types";

const AllCards = ({ cards }: IAllCardsProps): JSX.Element => {
  const renderCards = () => {
    return cards.map(({ id }) => {
      return (
        <div key={id} className="h-80 w-60 mr-4 mb-4 rounded-md bg-gray-400" />
      );
    });
  };

  return <div className="flex flex-1 flex-wrap ml-8">{renderCards()}</div>;
};

export default AllCards;
