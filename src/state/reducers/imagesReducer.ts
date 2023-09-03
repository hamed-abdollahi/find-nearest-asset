import { DetailAction, ImagesAction, PlaceAction } from '../actions/index'
import { actionType } from '../action-types/index'
import { PlaceModel } from '../../interfaces/AllInterface'

const initialState: string[] = []

const imagesReducer = (state = initialState, action: ImagesAction) => {
    switch (action.type) {
        case actionType.setImages:
            return action.payload
            break;
        default:
            return state
            break;
    }
}


export default imagesReducer
