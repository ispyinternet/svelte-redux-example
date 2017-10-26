import { createSelector } from 'reselect';

/* selectors */
const viewCar = cars => cars.viewByName ? cars.cars.carsByName[cars.viewByName] : false;
const carList = cars => cars.cars ? cars.cars.carsByName : {};
const favourites = cars => cars.favourites ? cars.favourites : [];
const carNames = cars => cars.cars.allNames ? cars.cars.allNames : [];

// memoized selector. I would like to know how to make this independed of changes to carList
// which only be relevent if we could delete from carList. But I cant make it independent
// since I need to access carList ??

const getFavouriteCars = createSelector(
    favourites,
    carList,
    (cars, carList) => cars.map( car => carList[car] )
);

export {
    viewCar,
    carList,
    favourites,
    carNames,
    getFavouriteCars
}
