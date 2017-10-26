import master from './master';
import reducer, { initialState } from './reducers';
import * as masterSelectors from './selectors';
import * as masterOperations from './operations';
import * as masterTypes from './types';

export {
    masterSelectors,
    masterOperations,
    masterTypes,
    initialState
}

export default reducer;

