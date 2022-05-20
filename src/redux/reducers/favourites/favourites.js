

const initialState = {
    favourites: [],
    count: 1,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITES' : {
            return {
                ...state,
                favourites: state.favourites.findIndex((item) => item.id === action.obj.id && item.title === action.obj.title) > -1 ?
                    state.favourites.map((item) => item.id === action.obj.id && item.title === action.obj.title ? {...item,count: item.count+1}: item) :
                    [...state.favourites, {...action.obj, count:1}]
            }
        }
        case 'DELETE_FAVOURITES' : {
            return {
                ...state,
                favourites: state.favourites.filter((item) => item.id !== action.id && item.title !== action.title)
            }
        }

        case 'FAVOURITES_LOCAL' : {
            return {
                ...state,
                favourites : action.favourites
            }
        }

        case 'CLEAR_FAVOURITES' : {
            return {
                ...state,
                favourites: []
            }
        }
        default: return state
    }
};


export const addFavourites = (obj) => {
    return (dispatch) => {
        return dispatch({type: 'ADD_FAVOURITES', obj})
    }
};

export const delFavourites = (id, title) => {
    return (dispatch) => {
        return dispatch({type: 'DELETE_FAVOURITES', id, title})
    }
};

export const getFavouritesLocalStorage = () => {
    return (dispatch) => {
        return dispatch({type: 'FAVOURITES_LOCAL', favourites: JSON.parse(localStorage.getItem('favourites'))})
    }
};

export const clearFavourites = () => {
    return (dispatch) => {
        return dispatch({type: 'CLEAR_FAVOURITES'})
    }
};