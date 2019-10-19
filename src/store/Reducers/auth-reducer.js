const INITIAL_STATE = {
    isLogin: false,
    loginErr: '',
    isSignup: false,
    signupErr: '',
    signupSuccess: "",
    isMatch_pass: "",
    islogin: "",
    currentuser:'   '

}


const Authreducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case "islogin":
            state.isLogin = action.payload
            return state
        case "loginErr":
            state.loginErr = action.payload
            return { ...state, loginErr: state.loginErr.concat() }
        case "loginSuccess":
            state.loginSuccess = action.payload
            return { ...state, loginSuccess: state.loginSuccess.concat() }
        case "signupSuccess":
            state.signupSuccess = action.payload
            return { ...state, signupSuccess: state.signupSuccess }
        case "signupErr":
            state.signupErr = action.payload
            return { ...state, signupErr: state.signupErr}
        case "!match_pass":
            state.isMatch_pass = action.payload
            return { ...state, isMatch_pass: state.isMatch_pass.concat() }
        case "current_user":
            state.currentuser = action.payload
            return { ...state, currentuser: state.currentuser}
        default: return state

    }
}


export default Authreducer