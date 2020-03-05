/* eslint-disable @typescript-eslint/camelcase */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
export const distributeCandies = function(candies, num_people) {
  const result = Array(num_people).fill(0);
  let distributionCount = 0;
  while (true) {
    const peopleToDistributeIndex = distributionCount % num_people;
    const candyToDistribute = distributionCount + 1;
    if (candies < candyToDistribute) {
      result[peopleToDistributeIndex] += candies;
      break;
    } else {
      result[peopleToDistributeIndex] += candyToDistribute;
      candies -= candyToDistribute;
      distributionCount++;
    }
  }

  return result;
};
