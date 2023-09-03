import {combineReducers } from "redux"
import detailReducer from "../reducers/detailReducer"
import placeListReducer from "../reducers/placeListReducer"
import closeReducer from "./closeReducer"
import edgeReducer from "./edgeReducer"
import galleryReducer from "./galleryReducer"
import imagesReducer from "./imagesReducer"
import pageReducer from "./pageReducer"
import placeReducer from "./placeReducer"
import pointReducer from "./pointReducer"
import totalReducer from "./totalReducer"
import viewerReducer from "./veiwerReducer"


const allReducers = combineReducers({
    detail : detailReducer,
    placeList : placeListReducer,
    gallery : galleryReducer,
    place: placeReducer,
    images:imagesReducer,
    points: pointReducer,
    edge : edgeReducer,
    close: closeReducer,
    viewer : viewerReducer,
    page: pageReducer,
    total:totalReducer
})

export default allReducers

export type State = ReturnType<typeof allReducers>