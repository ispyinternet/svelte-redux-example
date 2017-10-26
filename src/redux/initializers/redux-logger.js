//
// Set up redux-logger, and take into account that our
// reducers use immutablejs.
//
// SEE
// https://github.com/evgenyrodionov/redux-logger
//
var __DEV__ = true;

import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';


const logger = createLogger({
    collapsed: false,
    // only log in development mode
    predicate: () => __DEV__
});

export default {
    enhancers: __DEV__ ? [applyMiddleware(logger)] : []
};
