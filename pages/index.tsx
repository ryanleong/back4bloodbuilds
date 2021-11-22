import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { CardsContextProvider } from "../contexts/CardsContext";
import useDeck, { CARD_QUERY_PARAM } from "../hooks/useDeck";
import { IHomeProps } from "../utils/types";
import Header from "../components/Header";
import AllCards from "../components/AllCards/AllCards";
import Deck from "../components/Deck";

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
    <div id="home">
      <Head>
        <title>Back 4 Blood Builds</title>
        <meta
          name="description"
          content="Build and share your Back 4 Blood decks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <CardsContextProvider value={allCards}>
        <main className="flex container mx-auto px-4 py-4">
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
