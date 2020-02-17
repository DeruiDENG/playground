/**
 * Pyramid Slide Down
 * https://www.codewars.com/kata/pyramid-slide-down/train/javascript
 */

function longestSlideDown(pyramid: number[][]): number {
  const numFloor = pyramid.length;
  while (pyramid.length > 1) {
    const upFloor = pyramid[pyramid.length - 2];
    const baseFloor = pyramid[pyramid.length - 1];
    const updatedUpFloor = upFloor.map((ele, index) => {
      const largestChildValue = Math.max(baseFloor[index], baseFloor[index + 1]);
      return largestChildValue + ele;
    });
    pyramid = [...pyramid.slice(0, pyramid.length - 2), updatedUpFloor];
  }

  return pyramid[0][0];
}
