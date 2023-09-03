import {CloseAction, DetailAction, EdgeAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: boolean = true

const closeReducer = (state = initialState, action: CloseAction) => {
    switch (action.type) {
        case actionType.showClose:
            return action.payload
            break;
       
        default:
            return state
            break;
    }
}


export default closeReducer
