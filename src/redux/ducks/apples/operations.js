import apples from './apples';
import * as actions from './actions';

const addApple = actions.addApple; // simple operation maps to a single action
const viewApple = actions.viewApple;
const hideApple = actions.hideApple;
const toggleFavouriteApple = actions.toggleFavouriteApple;;

export {
    addApple,
    viewApple,
    hideApple,
    filterApples,
    toggleFavouriteApple
}
