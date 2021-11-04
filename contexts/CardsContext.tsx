import { createContext } from "react";
import { ICardsContext } from "../utils/types";

const CardsContext = createContext<ICardsContext>({});

export const CardsContextProvider = CardsContext.Provider;
export default CardsContext;
