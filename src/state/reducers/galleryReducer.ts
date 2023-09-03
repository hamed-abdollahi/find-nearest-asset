import {DetailAction, GalleryAction} from '../actions/index'
import { actionType } from '../action-types/index'

const initialState: boolean = false

const galleryReducer = (state = initialState, action: GalleryAction) => {
    switch (action.type) {
        case actionType.showGallery:
            return action.payload
            break;
        default:
            return state
            break;
    }
}


export default galleryReducer
