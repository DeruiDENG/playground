// Entrance of demo
import { main as homeworkMain } from './homework/homework';

homeworkMain();

/**
 * Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 * @param {string[]} collection
 * @param {string=>boolean} predicate
 * @returns {string[]} the new filtered array.
 */
function filter(collection, predicate){
  // ...
}

/**
 * @typedef Profile
 * @prop {string} firstName
 * @prop {string} lastName
 * @prop {bool} isStarMember
 */

/**
 * @typedef {object} State
 * @prop {boolean} isLoggedIn
 * @prop {Profile} [profile]
 */

/**
 * @typedef WholeState
 * @prop {State} account
 */

/**
 * @type {State}
 */
const initialState = {
  isLoggedIn: true,
  profile: null,
}
