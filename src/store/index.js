import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Allreducer from './Reducers'

export default createStore(Allreducer,applyMiddleware(thunk))
