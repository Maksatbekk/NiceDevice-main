import axios from "axios";


const initialState ={
    goods: [],
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL' : {
            return {
                ...state,
                goods: action.arr,
                count: action.arr.length
            }
        }
        default : return state
    }
}

export const getAll = (title = '') => {
    return (dispatch) => {
        axios(`http://localhost:8080/goods?title_like=${title}`)
            .then(({data}) => {
                return dispatch({type:'GET_ALL', arr : data})
            })
    }
};
