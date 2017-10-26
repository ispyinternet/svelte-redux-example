import { createStore, combineReducers, bindActionCreators } from 'redux';
import { buildStack } from 'redux-stack';
import stack from './initializers';

import master, { initialState } from './ducks/master'; // special root reducer has access to whole state.

const { reducers, enhancer } = buildStack(stack);

const combinedReducers = combineReducers(reducers); // combine the ducks

const rootReducer = master(combinedReducers); // curried function to create root reducer with master having root control

const store = createStore(rootReducer, initialState, enhancer);

/// optional if you have create curried functions that depend on store, to create bound action creators now is the time
/// to set them up... then you can pass this functions around to components and the components wont require access
/// to the store... HOWEVER...im still yet to figure out how to do this as the the current layout is such that
/// the component can import the interface to the ducks it uses from the ducks actions / operations
/// the bound action creators would only be available from this file? Doh.

export default store;
