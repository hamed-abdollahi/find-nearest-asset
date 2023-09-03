import {PageAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: number = 1

const pageReducer = (state = initialState, action: PageAction) => {
    switch (action.type) {
        case actionType.setPage:
            return action.payload
            break;
       
        default:
            return state
            break;
    }
}


export default pageReducer
