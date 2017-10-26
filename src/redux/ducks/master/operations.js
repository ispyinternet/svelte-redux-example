import master from './master';
import * as actions from './actions';

const resetApp = actions.resetApp; // simple operation maps to a single action
const setState = actions.setState;

export {
    resetApp,
    setState
}
