/**
 * Pete, the baker
 * https://www.codewars.com/kata/pete-the-baker/train/javascript
 */

function cakes(recipe: object, available: object): number {
  const availableCounts = Object.entries(recipe).map(([key, value]) => {
    const availableAmount = available[key] ? available[key] : 0;
    return Math.floor(availableAmount / value);
  });

  return Math.min(...availableCounts);
}
