//
// reducers
//
// Optionally you can include your reducer forming in one place as
// an initializer.
//
// In addition, if you want more modularity you can make an initializer
// per reducer. So if you were ever to kill the 'settings' module,
// you would only need to remove that initializer file.
//

/* import all your redux ducks reducers */
import apples from '../ducks/apples';
import cars from '../ducks/cars';
import friends from '../ducks/friends';
import { initialState } from '../ducks/master'; // special root reducer takes requires initialState to be present in the reducer keys

const reducers = {
    apples,
    cars,
    friends,
    ...initialState
};

export default {
    name: 'reducers',
    reducers: reducers
};
