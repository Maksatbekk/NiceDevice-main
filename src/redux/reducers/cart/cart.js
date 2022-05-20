

const initialState = {
    cart: [],
    count: 1,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CART' : {
            return {
                ...state
            }
        }
        case 'CLOSE_CART' : {
            return {
                ...state
            }
        }
        case 'ADD_CART' : {
            return {
                ...state,
                cart: state.cart.findIndex((item) => item.id === action.obj.id && item.title === action.obj.title) > -1 ?
                    state.cart.map((item) => item.id === action.obj.id && item.title === action.obj.title ? {...item,count: item.count+1}: item) :
                    [...state.cart, {...action.obj, count:1}]
            }
        }
        case 'DELETE_CART' : {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.id && item.title !== action.title)
            }
        }

        case 'REMOVE_CARD' : {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id === action.id && item.title === action.title)[0].count > 1 ?
                    state.cart.map((item) => item.id === action.id && item.title === action.title ? {...item,count: item.count-1}: item) :
                    state.cart.filter((item) => item.id !== action.id && item.title !== action.title)
            }
        }
        case 'CART_LOCAL' : {
            return {
                ...state,
                cart : action.cart
            }
        }

        case 'CLEAR_CART' : {
            return {
                ...state,
                cart: []
            }
        }
        default: return state
    }
};


export const openCart = (obj) => {
    return (dispatch) => {
        return dispatch({type: 'OPEN_CART', obj})
    }
};

export const closeCart = () => {
    return (dispatch) => {
        return dispatch({type: 'CLOSE_CART'})
    }
};

export const addCart = (obj) => {
    return (dispatch) => {
        return dispatch({type: 'ADD_CART', obj})
    }
};

export const delCart = (id, title) => {
    return (dispatch) => {
        return dispatch({type: 'DELETE_CART', id, title})
    }
};

export const removeCard = (id, title) => {
  return (dispatch) => {
      return dispatch({type: 'REMOVE_CARD', id, title})
  }
};

export const getCartLocalStorage = () => {
    return (dispatch) => {
        return dispatch({type: 'CART_LOCAL', cart: JSON.parse(localStorage.getItem('cart'))})
    }
};

export const clearCart = () => {
    return (dispatch) => {
        return dispatch({type: 'CLEAR_CART'})
    }
};