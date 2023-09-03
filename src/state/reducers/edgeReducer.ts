import {DetailAction, EdgeAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: boolean = true

const edgeReducer = (state = initialState, action: EdgeAction) => {
    switch (action.type) {
        case actionType.showEdge:
            return action.payload
            break;
       
        default:
            return state
            break;
    }
}


export default edgeReducer
