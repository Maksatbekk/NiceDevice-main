import axios from "axios";


const initialState ={
  apple: [],
  count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_APPLE' : {
            return {
                ...state,
                apple: action.arr,
                count: action.arr.length
            }
        }
        default : return state
    }
}

export const getApple = () => {
    return (dispatch) => {
        axios('http://localhost:8080/apple')
            .then(({data}) => {
                return dispatch({type: 'GET_APPLE', arr: data})
            })
    }
};
 