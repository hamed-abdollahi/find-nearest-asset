import {PlaceListAction, ViewerAction} from '../actions/index'
import { actionType } from '../action-types/index'
import { CesiumComponentRef } from 'resium'
import { Viewer } from 'cesium'
import { FuncType, PointType } from '../../interfaces/AllInterface'

let initialState : React.RefObject<CesiumComponentRef<Viewer>> | null = null

const viewerReducer = (state = initialState, action: ViewerAction) => {
    switch (action.type) {
        case actionType.setViewer:
            return action.payload
            break;
        default:
            return state
            break;
    }
}

export default viewerReducer
