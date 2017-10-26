import { createSelector } from 'reselect';

/* selectors */
const viewApple = apples => apples.viewByName ? apples.apples.byName[apples.viewByName] : false;
const appleList = apples => apples.apples  ? apples.apples.byName : {};
const favouriteApples = apples => apples.favouriteApples ? apples.favouriteApples : [];
const appleNames = apples => apples.appleNames ? apples.appleNames : [];

// memoized selector, (doesnt recompute unless favourites or list changes)
const getFavouriteApples = createSelector(
    favouriteApples,
    appleList,
    (apples, appleList) => apples.map( apple => appleList[apple] )
); 

export {
    viewApple,
    appleList,
    favouriteApples,
    getFavouriteApples,
    appleNames
}
