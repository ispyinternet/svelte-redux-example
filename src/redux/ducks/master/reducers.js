/*
 * special master reducer can action against the entire store...
 * 
 * need to export a special version of the intial state keys to stop redux borking
 * this is combined with other 'mounted' reducers in the store stack intialization
 * see that file for details
 */
import master from './master';
import * as TYPES from './types';

/* Initial state */
export const initialState = {
    
    status: (state) => state ? state : {}
    
}

/*
 * this special reducer creating function receives the combined reducers then
 * creates the root reducer to pass to the store. See how the redux stack is 
 * initialized for usage
 */
const masterReducer = (combinedReducers) =>  (state, action) =>
	  {
	      switch(action.type) {
		  
	      case TYPES.SET_APP_STATE:
		  return { ...state, ...{ 'status' : action.payload }};
		  
	      case TYPES.RESET_APP:		  
		  state = undefined;

	      default:	      
		  return { ...state, ...combinedReducers(state, action)};
	      }
	  };

export default masterReducer;
