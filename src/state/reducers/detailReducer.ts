import {DetailAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: boolean = false

const detailReducer = (state = initialState, action: DetailAction) => {
    switch (action.type) {
        case actionType.showDetail:
            return action.payload
            break;
       
        default:
            return state
            break;
    }
}


export default detailReducer
