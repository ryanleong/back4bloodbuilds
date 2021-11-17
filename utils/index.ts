/**
 * @description Removes duplicates from array
 * @param {Array<string | number>} array Array of elements
 * @returns {Array<string | number>} Arary of ements without duplicates
 */
const removeDuplicatesFromArray = (array) => {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

export { removeDuplicatesFromArray };
