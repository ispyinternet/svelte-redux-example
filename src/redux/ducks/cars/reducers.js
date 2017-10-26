import cars from './cars';
import * as TYPES from './types';

/* State shape
 
 {
  cars: {
     byName: {
        "name" : {
           name: string,
           colour: string
         },
         ...
     }
     allNames: string[]
  },
  favourites: string[],  
  viewByName: string
}
*/


/* add a car */
const carsCarsInitialState = {

    carsByName: {},
    allNames: []
};

const carsInitialState = {
    cars: carsCarsInitialState,
    favourites: []
}

/* add a car */
const addCar = function(cars, car) {

    let carsByName = cars.carsByName ? { ...cars.carsByName, ...{ [ car.name ] : car } } : [];		
    let allNames = cars.allNames ? [ ...cars.allNames ] : [];

    if(!cars.carsByName[car.name]) {
	// new car...
	return {
	    carsByName,
	    allNames: allNames.concat(car.name)
	};
	
    } else {
	// update existing
	return {
	    carsByName,
	    allNames };
    }
}

/* toggle favourite */
const toggleFavourite = function(favourites = [], car)
{
    if (favourites.indexOf(car) > -1) {
	// the car is already a favourite, remove it...
	return { favourites : favourites.filter( item => item !== car) };
    } else {
	// add the car to favourites
	return { favourites : favourites.concat(car) };
    }
}

const carReducer = cars.createReducer(
    {
	[ TYPES.VIEW ] : ( state, action ) => ( { ...state, ...{ viewByName : action.payload } } ),
	[ TYPES.TOGGLE_FAVOURITE ] : ( state, action ) => ( { ...state, ...toggleFavourite(state.favourites, action.payload ) }),
	[ TYPES.ADD ] : ( state, action ) => ( { ...state, ...{ cars : addCar(state.cars, action.payload) } } )	
	
    }, carsInitialState );

export default carReducer;
