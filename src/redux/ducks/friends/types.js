import friends from './friends';

const ADD = friends.defineType('ADD');
const VIEW = friends.defineType('VIEW');
const TOGGLE_FAVOURITE = friends.defineType('TOGGLE_FAVOURITE');

export {
    ADD,
    VIEW,
    TOGGLE_FAVOURITE
}

