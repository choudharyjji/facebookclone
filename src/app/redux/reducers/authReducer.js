//Login Register
const initalState = {
    authenticated: false   
}

export default function authReducer(state = initalState , { type, payload }){
    switch (type) {
        case 'SIGN_IN_USER':
            return {
                ...state,
                authenticated: true
            }
        default:
            return state;
    }
}
