const AllCards = () => {
  const cards = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
    { id: 4, name: "Card 4" },
    { id: 5, name: "Card 5" },
  ];

  function renderCards() {
    return cards.map(({ id }) => {
      return (
        <div key={id} className="h-80 w-60 mr-4 mb-4 rounded-md bg-gray-400" />
      );
    });
  }

  return <div className="flex flex-1 flex-wrap ml-4">{renderCards()}</div>;
};

export default AllCards;
