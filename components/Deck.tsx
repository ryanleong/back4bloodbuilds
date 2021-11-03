import { ICard, IDeckProps } from "../utils/types";

const Deck = ({ cards }: IDeckProps): JSX.Element => {
  const renderCards = () => {
    return cards.map(({ id }: ICard) => {
      return (
        <div key={id} className="bg-gray-400 h-10 w-full mb-2 rounded-sm" />
      );
    });
  };

  return <div className="w-80">{renderCards()}</div>;
};

export default Deck;
