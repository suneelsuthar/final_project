import {combineReducers} from 'redux'
import Authreducer from './auth-reducer'
import Mainreducer from './main-reducer'


export default combineReducers({
    Authreducer,
    Mainreducer
})