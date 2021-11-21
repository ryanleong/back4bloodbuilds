import { Container, Draggable, DropResult } from "react-smooth-dnd";

import { ECardCategoryColor, ICard, IDeckProps } from "../utils/types";

const Deck = (props: IDeckProps): JSX.Element => {
  const { deckCards, updateDeckCardsOrder } = props;

  // TODO: Remove cards from deck

  const renderCards = () => {
    const cardsWithEmpty = [...deckCards];

    if (cardsWithEmpty.length < 15) {
      cardsWithEmpty.push({
        id: -9999,
        name: "EMPTY_CARD",
        category: "",
        description: "",
        filename: "",
      });
    }

    return cardsWithEmpty.map(({ id, name, description, category }: ICard) => {
      if (name === "EMPTY_CARD") {
        return (
          <button
            className="h-12 w-full mb-2 rounded-md border-2 border-dashed flex items-center justify-center"
            onClick={() => console.log("here")}
            key={id}
          >
            <span className="material-icons">add</span>
          </button>
        );
      }

      const categoryColor = `border-${ECardCategoryColor[category]}`;

      return (
        <Draggable key={id}>
          <div
            className={`w-full mb-2 border-l-4 flex flex-col py-2 pl-4 pr-2 bg-gray-800 ${categoryColor}`}
            onClick={() => console.log("here")}
          >
            <div className="flex flex-row w-full">
              <span className="text-lg">{name}</span>

              <div className="ml-auto flex flex-row items-center">
                <button>
                  <span className="material-icons" style={{ fontSize: "21px" }}>
                    edit
                  </span>
                </button>
                <button className="ml-1">
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
    <div className="w-80">
      <Container onDrop={updateDeckCardsOrder}>{renderCards()}</Container>
    </div>
  );
};

export default Deck;
