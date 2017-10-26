import apples from './apples';
import { combineReducers } from 'redux';
import * as TYPES from './types';

/* State shape
 
 {
  apples: {
     byName: {
        "name" : {
           name: string,
           colour: string
         },
         ...
     }
  },
  appleNames: string[],
  favouriteApples: string[],
  viewByName: string
}
*/

const applesInitialState = {

    apples: [],
    appleNames: [],
    favouriteApples: [],
    viewByName: false
}

const toggleFavourites = function(favouriteApples = [], name)
{

    if (favouriteApples.indexOf(name) > -1) {
	return favouriteApples.filter( apple => name !== apple);
    } else {
	return favouriteApples.concat(name);
    }
}

const addApple = function(state, apples, appleNames = [], apple)
{
    
    let newApples = apples ? {} : {...apples}; 
    let newApple = { [apple.name] : apple };

    newApples = { ...apples, ...newApple };

    if(appleNames.indexOf(apple.name) > -1) {
	// update the apple...
	return { ...state, ...{ apples : { byName : newApples } } };
	
    } else {

	// add the apple
	return { ...state, ...{ apples: { byName: newApples }, appleNames: appleNames.concat(apple.name) } };
    }
}

const appleReducer = apples.createReducer(
    {
	[ TYPES.ADD ] : ( state, action ) => addApple(state, state.apples.byName, state.appleNames, action.payload),

	[ TYPES.TOGGLE_FAVOURITE ] : ( state, action ) => ( {...state, ...{ favouriteApples: toggleFavourites(state.favouriteApples, action.payload) }}),

	[ TYPES.VIEW ] : ( state, action ) => ( { ...state, ...{ viewByName: action.payload } }),

	[ TYPES.HIDE ] : ( state ) => ( { ...state, ...{ viewByName: false } } )
	
    }, applesInitialState );

export default appleReducer;
