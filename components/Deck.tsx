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
   * @description Update card order on mobile
   * @param {number} index current card index
   * @param {number} newIndex - new index of card
   */
  const updateMobileOrder = (index: number, newIndex: number) => {
    if (newIndex < 0 || newIndex >= deckCards.length) {
      return;
    }

    updateDeckCardsOrder({
      removedIndex: index,
      addedIndex: newIndex,
    });
  };

  /**
   * @description Render mobile reorder component
   * @param index current card index
   * @returns {JSX.Element} mobile reorder component
   */
  const renderMobileReorder = (index: number) => {
    return (
      <div className="flex flex-col mr-4">
        <button
          className="h-6 w-6 mb-1"
          onClick={() => updateMobileOrder(index, index - 1)}
        >
          <span className="material-icons">expand_less</span>
        </button>

        <span className="text-center">{index + 1}</span>

        <button
          className="h-6 w-6 mt-1"
          onClick={() => updateMobileOrder(index, index + 1)}
        >
          <span className="material-icons">expand_more</span>
        </button>
      </div>
    );
  };

  /**
   * @description Render cards
   * @returns {JSX.Element} - list of cards
   */
  const renderCards = () => {
    return deckCards.map((card: ICard, index) => {
      const { id, name, description, category } = card;
      const categoryColor = getBorderColorClass(category);

      return (
        <Draggable key={id}>
          <div
            className={`flex flex-row w-full mb-2 border-l-4 py-2 pl-3 pr-2 bg-gray-800 ${categoryColor}`}
            onClick={() => console.log("here")}
          >
            {renderMobileReorder(index)}

            <div className="flex flex-col">
              <span className="text-lg">{name}</span>
              <span className="text-sm">{description}</span>
            </div>
            <div className="ml-auto">
              <button className="ml-1" onClick={() => removeFromDeck(card)}>
                <span className="material-icons">close</span>
              </button>
            </div>
            {/* <div className="flex flex-row w-full"></div> */}
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
