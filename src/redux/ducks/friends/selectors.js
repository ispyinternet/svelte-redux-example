/* selectors */
const friends = friends => friends.friends ? friends.friends : [];
const favourites = friends => friends.favourites ? friends.favourites : [];
const view = friends => friends.view ? friends.view : false;

export {
    friends,
    view,
    favourites
}
