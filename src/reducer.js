export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    token: null,
};
//access token "BQCZHC26vcWGvSTdD3h-dV8yeMzluXKSKAlbX1R23bfKMvyBeU…_QOIlJUjBYLBI9VsqiIGKPjIGoiVb44dn8mPFYHQz5NM96L7W"
//Action => type, [payload]
const reducer = (state, action) => {
    console.log('action', action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;