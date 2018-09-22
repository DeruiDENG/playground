import * as _ from 'lodash';

const selectedPassengerNumbers = [1, 2];
const passengerInfos = [
  {
    passengerNumber: 1,
    name: 'David',
    hobby: ['swimming', 'driving'],
  },
  {
    passengerNumber: 2,
    name: 'Bob',
    hobby: ['videogames'],
  },
  {
    passengerNumber: 3,
    name: 'Rose',
    hobby: ['hiking', 'swimming'],
  },
];

const passengersInfoWithHobby = _.map(selectedPassengerNumbers, (passengerNumber) => {
  const passengerInfo = _.find(passengerInfos, { passengerNumber });
  if (!passengerInfo) {
    return [];
  }

  return _.map(passengerInfo.hobby, hobby => ({
    hobby,
    name: passengerInfo.name,
  }));
});

const passengersHobby = _.flatten(passengersInfoWithHobby);
