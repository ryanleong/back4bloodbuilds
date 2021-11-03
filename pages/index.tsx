import Head from "next/head";
import AllCards from "../components/AllCards";
import Deck from "../components/Deck";
import { sampleCards } from "../utils/mocks";

export async function getStaticProps() {
  return {
    props: {
      cards: [],
    },
  };
}

const Home = (): JSX.Element => {
  return (
    <div id="home" className="py-10">
      <Head>
        <title>Back 4 Blood Builds</title>
        <meta name="description" content="Back 4 Blood Builds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row mx-auto px-4 mb-6 max-w-screen-2xl">
        <h1 className="font-Roboto font-light text-5xl">Back 4 Blood Builds</h1>
      </div>

      <main className="flex flex-row mx-auto px-4 max-w-screen-2xl">
        <Deck cards={sampleCards} />
        <AllCards cards={sampleCards} />
      </main>
    </div>
  );
};

export default Home;
