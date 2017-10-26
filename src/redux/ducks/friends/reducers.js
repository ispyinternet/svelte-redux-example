import friends from './friends';
import * as TYPES from './types';

/* State shape
 
 {
  friends:string[];
  favourites:string[];
 }
*/

/* add friend */
const friendsInitialState = {

    friends: [],
    favourites: [],
    view:false
};

const addFriend = ( friends, friend ) => friends.indexOf(friend) >-1 ? friends : friends.concat(friend);
const toggleFavourite = ( favourites, friend ) =>
	  favourites.indexOf(friend) > -1 ? favourites.filter( item => item !== friend) : favourites.concat(friend);

const friendsReducer = friends.createReducer(
    {
	[ TYPES.ADD ] : ( state, action ) => ( { ...state, ...{ friends: addFriend(state.friends, action.payload ) } } ),
	[ TYPES.VIEW ] : ( state, action ) => ( { ...state, ...{ view : action.payload } } ),
	[ TYPES.TOGGLE_FAVOURITE ] : ( state, action ) => ( { ...state, ...{ favourites: toggleFavourite(state.favourites, action.payload) } } )
    },    friendsInitialState );

export default friendsReducer;
