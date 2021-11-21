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

  const renderCards = () => {
    return deckCards.map((card: ICard) => {
      const { id, name, description, category } = card;
      const categoryColor = ECardCategoryColor[category];

      return (
        <Draggable key={id}>
          <div
            className={`w-full mb-2 border-l-4 flex flex-col py-2 pl-4 pr-2 bg-gray-800 ${categoryColor}`}
            onClick={() => console.log("here")}
          >
            <div className="flex flex-row w-full">
              <span className="text-lg">{name}</span>

              <div className="ml-auto flex flex-row items-center">
                <button className="md:hidden">
                  <span className="material-icons" style={{ fontSize: "21px" }}>
                    edit
                  </span>
                </button>
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
    </div>
  );
};

export default Deck;
