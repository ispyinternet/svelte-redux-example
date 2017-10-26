// SVELTE UI
import UI from './svelte/window.svelte.html';

// REDUX STORE
import store from './redux/store';

// APPLES DUCK
import { appleOperations }  from './redux/ducks/apples';
import { masterOperations } from './redux/ducks/master';   

store.dispatch( masterOperations.setState('BOOTING UP...'));

const ui = new UI({
    target: document.getElementById('container')
});

store.dispatch( masterOperations.setState('UI CREATED...'));

// add an apple 
store.dispatch(appleOperations.addApple( { name: 'granny smith (added by system)', colour: 'green' }));

store.dispatch( masterOperations.setState('DUMMY CONTENT ADDED...'));

