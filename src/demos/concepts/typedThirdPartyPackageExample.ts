import * as _ from 'lodash';

const selectedPassengerNumbers = [1, 2];
const passengerInfos = [
    {
        passengerNumber: 1,
        name: 'David',
        hobby: ['swimming', 'driving']
    },
    {
        passengerNumber: 2,
        name: 'Bob',
        hobby: ['videogames']
    },
    {
        passengerNumber: 3,
        name: 'Rose',
        hobby: ['hiking', 'swimming'],
    },
];

// Expected: [{name: 'David', hobby: 'swimming'}, {name: 'David', hobby: 'driving'}, {name: 'Bob', hobby: 'videogames'}]

const passengersInfoWithHobby = _.map(selectedPassengerNumbers, passengerNumber=>{
    const passengerInfo = _.find(passengerInfos, {passengerNumber});
    if(!passengerInfo){
        return [];
    } else {
        return _.map(passengerInfo.hobby, hobby=>({
            name: passengerInfo.name,
            hobby,
        }));
    }
});

const passengersHobby = _.flatten(passengersInfoWithHobby);
