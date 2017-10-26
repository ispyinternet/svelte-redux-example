import cars from './cars';
import * as actions from './actions';

const addCar = actions.addCar; // simple operation maps to a single action
const viewCar = actions.viewCar;
const toggleFavourite = actions.toggleFavourite;

export {
    addCar,
    viewCar,
    toggleFavourite
}
