import { useState } from "react";
import { IUsePaginationProps, TUsePaginationItemRange } from "../utils/types";

const usePagination = ({
  numOfItems,
  itemsPerPage = 12,
}: IUsePaginationProps) => {
  const lastItemIndex = numOfItems - 1;
  const [page, setPage] = useState<number>(0);
  const [rangeOfItemsOnPage, setRangeOfItemsOnPage] = useState<
    TUsePaginationItemRange<number, number>
  >([0, itemsPerPage - 1]);
  const totalNumOfPages = Math.ceil(numOfItems / itemsPerPage);

  /**
   * @description Go to page
   * @param {number} page index of the page
   * @returns void
   */
  const goToPage = (page: number) => {
    if (page < 0 || page >= totalNumOfPages) return;

    const firstItemInRange = page * itemsPerPage;
    let lastItemInRange = firstItemInRange + itemsPerPage - 1;
    if (lastItemInRange > lastItemIndex) {
      lastItemInRange = lastItemIndex;
    }

    setPage(page);
    setRangeOfItemsOnPage([firstItemInRange, lastItemInRange]);
  };

  return {
    page,
    totalNumOfPages,
    rangeOfItemsOnPage,
    goToPage,
  };
};

export default usePagination;
