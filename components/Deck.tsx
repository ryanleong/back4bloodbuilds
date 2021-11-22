import { useEffect } from "react";
import { Container, Draggable, DropResult } from "react-smooth-dnd";

import { ECardCategoryColor, ICard, IDeckProps } from "../utils/types";

const Deck = (props: IDeckProps): JSX.Element => {
  const {
    deckCards,
    updateDeckCardsOrder,
    removeFromDeck,
    setIsCardSelectOpenMobile,
  } = props;

  /**
   * Work around for react-smooth-dnd blocking scroll on mobile
   * https://github.com/kutlugsahin/react-smooth-dnd/issues/75
   */
  useEffect(() => {
    const cleanClasses = () => {
      document.body.className = "";
    };
    document.addEventListener("touchend", cleanClasses, false);
    return () => {
      document.removeEventListener("touchend", cleanClasses, false);
    };
  }, []);

  /**
   * @description Get class for border color
   * @param {ECardCategoryColor} category ECardCategoryColor key / card category
   * @returns {string} - css class name
   */
  const getBorderColorClass = (category: string): string => {
    switch (ECardCategoryColor[category]) {
      case "BRAWN":
        return "border-green-400";
      case "DISCIPLINE":
        return "border-red-600";
      case "FORTUNE":
        return "border-yellow-300";
      case "REFLEX":
        return "border-blue-200";

      default:
        return "";
    }
  };

  /**
   * @description Render cards
   * @returns {JSX.Element} - list of cards
   * TODO: Add order change for mobile
   */
  const renderCards = () => {
    return deckCards.map((card: ICard) => {
      const { id, name, description, category } = card;
      const categoryColor = getBorderColorClass(category);

      return (
        <Draggable key={id}>
          <div
            className={`w-full mb-2 border-l-4 flex flex-col py-2 pl-4 pr-2 bg-gray-800 ${categoryColor}`}
            onClick={() => console.log("here")}
          >
            <div className="flex flex-row w-full">
              <span className="text-lg">{name}</span>

              <div className="ml-auto flex flex-row items-center">
                <button className="ml-1" onClick={() => removeFromDeck(card)}>
                  <span className="material-icons">close</span>
                </button>
              </div>
            </div>

            <div>
              <span className="text-sm">{description}</span>
            </div>
          </div>
        </Draggable>
      );
    });
  };

  return (
    <div className="w-full md:w-60 lg:w-80">
      <Container onDrop={updateDeckCardsOrder}>{renderCards()}</Container>

      {deckCards.length < 15 && (
        <button
          className="h-12 w-full mb-2 rounded-md border-2 border-dashed flex items-center justify-center md:hidden"
          onClick={() => setIsCardSelectOpenMobile(true)}
        >
          <span className="material-icons">add</span>
        </button>
      )}

      {deckCards.length < 1 && (
        <div className="flex justify-center items-center h-96 border-2 border-dashed rounded-md p-4">
          <span className="text-center">
            Select cards to add them to your deck
          </span>
        </div>
      )}
    </div>
  );
};

export default Deck;
