import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

import {
  IUseViewportSizeProps,
  IUseViewportSizeViewport,
} from "../utils/types";

const DEBOUNCE_TIME = 400;

const useViewportSize = ({ minWidth, maxWidth }: IUseViewportSizeProps) => {
  const [viewport, setViewport] = useState<IUseViewportSizeViewport>({
    width: 0,
    height: 0,
  });
  const [isWithinRange, setIsWithinRange] = useState<boolean>(false);

  const getCurrentViewport = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const updateIsWithinRange = (isWithin: boolean): void => {
    if (isWithin !== isWithinRange) {
      setIsWithinRange(isWithin);
    }
  };

  const onResize = () => {
    const viewport = getCurrentViewport();
    setViewport(viewport);

    const { width } = viewport;

    if (maxWidth) {
      if (width >= minWidth && width <= maxWidth) {
        updateIsWithinRange(true);
      } else {
        updateIsWithinRange(false);
      }
    } else {
      if (width >= minWidth) {
        updateIsWithinRange(true);
      } else {
        updateIsWithinRange(false);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnResize = useCallback(debounce(onResize, DEBOUNCE_TIME), []);

  useEffect(() => {
    window.addEventListener("resize", debouncedOnResize);
    debouncedOnResize();

    return () => {
      window.removeEventListener("resize", debouncedOnResize);
    };
  }, []);

  return {
    viewport,
    isWithinRange,
  };
};

export default useViewportSize;
