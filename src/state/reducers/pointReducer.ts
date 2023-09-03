import { DetailAction, PlaceAction, PointsAction } from '../actions/index'
import { actionType } from '../action-types/index'
import { PointType } from '../../interfaces/AllInterface'

const initialState: PointType[] = []

const pointReducer = (state = initialState, action: PointsAction) => {
    switch (action.type) {
        case actionType.setPoints:
            return action.payload
            break;
        default:
            return state
            break;
    }
}


export default pointReducer
