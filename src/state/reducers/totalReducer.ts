import {PageAction, TotalAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: number = 1

const totalReducer = (state = initialState, action: TotalAction) => {
    switch (action.type) {
        case actionType.setTotal:
            return action.payload
            break;
       
        default:
            return state
            break;
    }
}


export default totalReducer
