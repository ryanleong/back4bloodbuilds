import Head from "next/head";
import { useRouter } from "next/router";

import { CardsContextProvider } from "../contexts/CardsContext";
import useDeck, { CARD_QUERY_PARAM } from "../hooks/useDeck";
import { IHomeProps } from "../utils/types";
import AllCards from "../components/AllCards/AllCards";
import Deck from "../components/Deck";
import { useState } from "react";

export async function getStaticProps(): Promise<{ props: IHomeProps }> {
  // TODO: make API call
  const { sampleAllCards } = await import("../utils/mocks");

  return {
    props: {
      allCards: sampleAllCards,
    },
  };
}

const Home = ({ allCards }: IHomeProps): JSX.Element => {
  const router = useRouter();
  const [isCardSelectOpenMobile, setIsCardSelectOpenMobile] =
    useState<boolean>(false);
  const initialCardsIds = Array.isArray(router.query[CARD_QUERY_PARAM])
    ? router.query[CARD_QUERY_PARAM]
    : [];

  const {
    deckCards,
    deckCardsMap,
    updateDeckCardsOrder,
    addToDeck,
    removeFromDeck,
  } = useDeck({
    initialCardsIds: initialCardsIds as Array<string>,
    allCards: allCards,
  });

  return (
    <div id="home" className="py-10">
      <Head>
        <title>Back 4 Blood Builds</title>
        <meta name="description" content="Back 4 Blood Builds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardsContextProvider value={allCards}>
        <div className="flex container mx-auto px-4 mb-6">
          <h1 className="font-Roboto font-light text-5xl">
            Back 4 Blood Builds
          </h1>
        </div>

        <main className="flex container mx-auto px-4">
          <Deck
            deckCards={deckCards}
            updateDeckCardsOrder={updateDeckCardsOrder}
            removeFromDeck={removeFromDeck}
            setIsCardSelectOpenMobile={setIsCardSelectOpenMobile}
          />
          <AllCards
            deckCards={deckCardsMap}
            addToDeck={addToDeck}
            removeFromDeck={removeFromDeck}
            isCardSelectOpenMobile={isCardSelectOpenMobile}
            setIsCardSelectOpenMobile={setIsCardSelectOpenMobile}
          />
        </main>
      </CardsContextProvider>
    </div>
  );
};

export default Home;
