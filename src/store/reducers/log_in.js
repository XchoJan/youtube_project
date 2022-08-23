import { IS_LOGGED } from "../actions/log_in";

const initialState = {
    is_logged: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOGGED: {
            const  is_logged  = action.payload;
            console.log(is_logged, 'IS_LOGGED')
            return {
                ...state,
                is_logged,
            };
        }
        default: {
            return state;
        }
    }
}

