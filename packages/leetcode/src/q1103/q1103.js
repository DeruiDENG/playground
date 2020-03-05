/* eslint-disable @typescript-eslint/camelcase */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
export const distributeCandies = function(candies, num_people) {
  let result = Array(num_people).fill(0);
  let turn = 0;
  const candiesNeededForFirstTurn = ((1 + num_people) * num_people) / 2;
  while (true) {
    const candiesForFullTurn =
      candiesNeededForFirstTurn + turn * num_people * num_people;
    if (candies < candiesForFullTurn) {
      break;
    }
    candies -= candiesForFullTurn;
    result = result.map(
      (item, index) =>
        ((index + 1 + index + 1 + turn * num_people) * (turn + 1)) / 2
    );
    turn += 1;
  }

  // Assign one by one
  for (let i = 0; i < num_people; i++) {
    const candyToDistribute = i + 1 + turn * num_people;
    if (candies < candyToDistribute) {
      result[i] = result[i] + candies;
      break;
    } else {
      result[i] = result[i] + candyToDistribute;
      candies -= candyToDistribute;
    }
  }

  return result;
};
