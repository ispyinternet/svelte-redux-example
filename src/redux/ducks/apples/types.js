import apples from './apples';

const ADD = apples.defineType('ADD');
const VIEW = apples.defineType('VIEW');
const HIDE = apples.defineType('HIDE');
const TOGGLE_FAVOURITE = apples.defineType('TOGGLE_FAVOURITE');

export {
    ADD,
    VIEW,
    HIDE,
    TOGGLE_FAVOURITE
}

