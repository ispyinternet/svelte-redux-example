import friends from './friends';
import * as ACTIONS from './actions';

const addFriend = ACTIONS.addFriend; // simple operation maps to a single action
const viewFriend = ACTIONS.viewFriend; 
const toggleFavourite = ACTIONS.toggleFavourite;

export {
    addFriend,
    viewFriend,
    toggleFavourite
}
