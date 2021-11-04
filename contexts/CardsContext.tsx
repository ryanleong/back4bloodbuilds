import { createContext } from "react";
import { ICardsMap } from "../utils/types";

const CardsContext = createContext<ICardsMap>({});

export const CardsContextProvider = CardsContext.Provider;
export default CardsContext;
