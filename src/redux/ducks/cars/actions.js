import cars from './cars';
import * as types from './types';

const addCar = cars.createAction(types.ADD);
const viewCar = cars.createAction(types.VIEW);
const toggleFavourite = cars.createAction(types.TOGGLE_FAVOURITE);

export {
    addCar,
    viewCar,
    toggleFavourite
};

