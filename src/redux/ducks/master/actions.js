import master from './master';
import * as types from './types';

const resetApp = master.createAction(types.RESET_APP);
const setState = master.createAction(types.SET_APP_STATE);

export {
    resetApp,
    setState
};

