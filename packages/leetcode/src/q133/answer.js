// @ts-check

/**
 * @typedef GraphNode
 * @prop {number} val
 * @prop {GraphNode[]} neighbors
 */

/**
 * @param {GraphNode} node
 * @return {GraphNode}
 */
var cloneGraph = function(node) {
  if (node === null) {
    return null;
  }

  return cloneNode(node, []);
};

/**
 *
 * @param {GraphNode} node
 * @param {GraphNode[]} visitedNodes
 * @return {GraphNode} cloned
 */
function cloneNode(node, visitedNodes) {
  /**
   * @type {GraphNode}
   */
  const clonedNode = {
    val: node.val,
    neighbors: [],
  };

  visitedNodes.push(clonedNode);

  for (const neighbor of node.neighbors) {
    const visited = visitedNodes.find(node => node.val === neighbor.val);
    if (visited) {
      clonedNode.neighbors.push(visited);
    } else {
      clonedNode.neighbors.push(cloneNode(neighbor, visitedNodes));
    }
  }

  return clonedNode;
}

export { cloneGraph };
