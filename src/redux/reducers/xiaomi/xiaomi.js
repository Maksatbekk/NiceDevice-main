import axios from "axios";


const initialState ={
    xiaomi: [],
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_XIAOMI' : {
            return {
                ...state,
                xiaomi: action.arr,
                count: action.arr.length
            }
        }
        default : return state
    }
}

export const getXiaomi = () => {
    return (dispatch) => {
        axios('http://localhost:8080/xiaomi')
            .then(({data}) => {
                return dispatch({type: 'GET_XIAOMI', arr: data})
            })
    }
};