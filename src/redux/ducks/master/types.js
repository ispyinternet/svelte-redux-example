import master from './master';

const RESET_APP = master.defineType('RESET_APP');
const SET_APP_STATE = master.defineType('APP_STATE');

export {
    RESET_APP,
    SET_APP_STATE
}

