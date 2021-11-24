import { useMemo, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { CardsContextProvider } from "../contexts/CardsContext";
import useDeck, { CARD_QUERY_PARAM } from "../hooks/useDeck";
import { IHomeProps } from "../utils/types";
import Header from "../components/Header";
import AllCards from "../components/AllCards/AllCards";
import Deck from "../components/Deck";
import SectionText from "../components/SectionText";

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

  const initialCardsIds = useMemo(() => {
    const queryParam = router.query[CARD_QUERY_PARAM];

    if (!queryParam) return [];
    return Array.isArray(queryParam) ? queryParam : [queryParam];
  }, [router.query]);

  console.log(router.locale);

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
        <title>Back 4 Blood Deck Builder</title>

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Back 4 Blood deck builder" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
        {/* <meta property="og:image" content="" /> */}
        <meta
          property="og:description"
          content="Build your own custom Back 4 Blood decks. Perfect for sharing builds and theory crafting."
        />

        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-4">
        <div className="flex mb-8">
          <CardsContextProvider value={allCards}>
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
          </CardsContextProvider>
        </div>

        <SectionText
          title="What is Back 4 Blood"
          paragraphs={[
            "Back 4 Blood is a zombie first-person horde shooter video game developed by Turtle Rock Studios and published by Warner Bros. Interactive Entertainment. It features co-operative gameplay and player versus player (PvP) combat. Back 4 Blood is spiritual successor to the very first Turtle Rock Studios game, Left 4 Dead.",
            'Back 4 Blood utilises a virtual card system. This "roguelike" card system allow to create different experiences each and every time, putting player in control to craft custom decks, roll different builds, and undertake more demanding fights. There are corruption cards chosen by the Director and active cards that offer the player an opportunity to pick some useful special perks. In the cooperative mode, players unlock additional cards from the Supply Lines system. For PvP, all players always have all cards unlocked for fairness.',
            "Back 4 Blood is playable on Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X|S. It was released on October 12th, 2021. Players who purchased the Deluxe or Ultimate edition could play the game a couple days early, on October 7th, 2021.",
          ]}
        />
      </main>
    </div>
  );
};

export default Home;
