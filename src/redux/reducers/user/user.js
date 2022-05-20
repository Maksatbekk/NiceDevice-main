import axios from "axios";


const initialState = {
    user: {
        name : '',
        email: '',
        phone: '',
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ENTER' : {
            return {
                ...state,
                user : {...action.user}
            }
        }
        case 'LOCAL' : {
            return {
                ...state,
                user : {...action.user}
            }
        }
        case 'LOGOUT' : {
            return  {
                ...state,
                user: {
                    name : '',
                    email: '',
                    phone: ''
                }
            }
        }
        default : return state
    }
}

export const loginAccount = (obj, navigate) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/register', obj)
            .then(({data}) => {
                navigate('/');
                localStorage.setItem('user', JSON.stringify(data.user));
                return dispatch({type: 'ENTER', user: data.user })

            })
            .catch((err) => alert('не получилось'))
    }
};

export const enterAccount = (obj, navigate) => {
    return (dispatch) => {
        axios.post('http://localhost:8080/login', obj)
            .then(({data}) => {
                navigate('/');
                localStorage.setItem('user', JSON.stringify(data.user));
                return dispatch({type: 'ENTER', user: data.user })
            })
            .catch(() => console.log('Не получилось'))
    }
};

export const getLocalStorage = () => {
    return (dispatch) => {
        return dispatch({type: 'LOCAL', user: JSON.parse(localStorage.getItem('user'))})
    }
};

export const logOut = () => {
    return (dispatch) => {
        localStorage.removeItem('user');
        return dispatch({type: 'LOGOUT'})
    }
};

export const changeAccount = (data, user) => {
    return (dispatch) => {
        axios.patch(`http://localhost:8080/users/${user.id}`, data)
            .then(({data}) => {
                localStorage.setItem('user', JSON.stringify(data));
                return dispatch({type: 'ENTER', user: data })
            })
    }
};


// export const ContactUs = (e) => {
//         e.preventDefault();
//
//         emailjs.sendForm('service_obejdxh', 'template_ulthorm', e.target, 'myEmumGVHPiIZuK3C')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };