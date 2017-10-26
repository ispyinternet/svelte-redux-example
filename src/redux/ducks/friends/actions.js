import friends from './friends';
import * as TYPES from './types';

const addFriend = friends.createAction(TYPES.ADD);
const viewFriend = friends.createAction(TYPES.VIEW);
const toggleFavourite = friends.createAction(TYPES.TOGGLE_FAVOURITE);

export {
    addFriend,
    viewFriend,
    toggleFavourite
};

