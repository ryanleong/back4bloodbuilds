import Head from "next/head";

import { CardsContextProvider } from "../contexts/CardsContext";
import useDeck from "../hooks/useDeck";
import { IHomeProps } from "../utils/types";
import AllCards from "../components/AllCards";
import Deck from "../components/Deck";

import { sampleCards, sampleDeck } from "../utils/mocks";

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
  const { deckCards, addToDeck, removeFromDeck } = useDeck({
    // TODO: empty or read from query params
    initialCards: sampleDeck,
  });

  return (
    <div id="home" className="py-10">
      <Head>
        <title>Back 4 Blood Builds</title>
        <meta name="description" content="Back 4 Blood Builds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardsContextProvider value={allCards}>
        <div className="flex flex-row mx-auto px-4 mb-6 max-w-screen-2xl">
          <h1 className="font-Roboto font-light text-5xl">
            Back 4 Blood Builds
          </h1>
        </div>

        <main className="flex flex-row mx-auto px-4 max-w-screen-2xl">
          <Deck cards={deckCards} />
          <AllCards
            deckCards={deckCards}
            addToDeck={addToDeck}
            removeFromDeck={removeFromDeck}
          />
        </main>
      </CardsContextProvider>
    </div>
  );
};

export default Home;
