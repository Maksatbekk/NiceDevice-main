import axios from "axios";


const initialState ={
    samsung: [],
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SAMSUNG' : {
            return {
                ...state,
                samsung: action.arr,
                count: action.arr.length
            }
        }
        default : return state
    }
}

export const getSamsung = () => {
    return (dispatch) => {
        axios('http://localhost:8080/samsung')
            .then(({data}) => {
                return dispatch({type: 'GET_SAMSUNG', arr: data})
            })
    }
};