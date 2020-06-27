// @ts-check

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  /**
   * @type {Map<number, boolean>}
   */
  const visitedRooms = new Map();

  const processQueue = [0];
  while (processQueue.length) {
    const roomIndex = processQueue.pop();
    visitedRooms.set(roomIndex, true);
    processQueue.push(
      ...rooms[roomIndex].filter(index => !visitedRooms.get(index))
    );
  }

  return Array.from(visitedRooms.keys()).length === rooms.length;
};

export { canVisitAllRooms };
