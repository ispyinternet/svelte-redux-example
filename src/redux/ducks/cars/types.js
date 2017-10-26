import cars from './cars';

const ADD = cars.defineType('ADD');
const VIEW = cars.defineType('VIEW');
const TOGGLE_FAVOURITE = cars.defineType('TOGGLE_FAVOURITE');

export {
    ADD,
    VIEW,
    TOGGLE_FAVOURITE
}

