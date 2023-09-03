import {PlaceListAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: boolean = true

const placeListReducer = (state = initialState, action: PlaceListAction) => {
    switch (action.type) {
        case actionType.showPlaceList:
            return action.payload
            break;
        default:
            return state
            break;
    }
}


export default placeListReducer
