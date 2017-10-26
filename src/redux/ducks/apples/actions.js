import apples from './apples';
import * as types from './types';

const addApple = apples.createAction(types.ADD);
const viewApple = apples.createAction(types.VIEW);
const hideApple = apples.createAction(types.HIDE);
const toggleFavouriteApple = apples.createAction(types.TOGGLE_FAVOURITE);

export {
    addApple,
    viewApple,
    hideApple,
    toggleFavouriteApple
};

