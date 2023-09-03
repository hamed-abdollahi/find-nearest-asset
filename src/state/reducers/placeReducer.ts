import { DetailAction, PlaceAction } from '../actions/index'
import { actionType } from '../action-types/index'
import { PlaceModel } from '../../interfaces/AllInterface'

const initialState: PlaceModel = {
    id: '',
    name: '',
    category: [],
    description: '',
    icon: '',
    rate: 0,
    lat: 0,
    lng: 0
}

const placeReducer = (state = initialState, action: PlaceAction) => {
    switch (action.type) {
        case actionType.setPlace:
            return action.payload
            break;
        case actionType.getPlace:
            return state
            break;
        default:
            return state
            break;
    }
}


export default placeReducer
