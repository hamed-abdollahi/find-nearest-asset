import { actionType } from '../action-types'
import { Dispatch } from "redux"
import { PlaceModel, PointType } from '../../interfaces/AllInterface'
import { CesiumComponentRef } from 'resium'
import { Viewer } from 'cesium'

export const showDetail = (show: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.showDetail,
      payload: show
    })
  }
}

export const showEdge = (show: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.showEdge,
      payload: show
    })
  }
}

export const showClose = (show: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.showClose,
      payload: show
    })
  }
}

export const showPlaceList = (show: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.showPlaceList,
      payload: show
    })
  }
}

export const showGallery = (show: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.showGallery,
      payload: show
    })
  }
}

export const setPlace = (place: PlaceModel) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.setPlace,
      payload: place
    })
  }
}

export const setPage = (page: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.setPage,
      payload: page
    })
  }
}

export const setTotal = (total: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.setTotal,
      payload: total
    })
  }
}



export const setViewer = (viewer: React.RefObject<CesiumComponentRef<Viewer>>) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.setViewer,
      payload: viewer
    })
  }
}

export const setImages = (images: string[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.setImages,
      payload: images
    })
  }
}

export const setPoints = (points: PointType[]) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionType.setPoints,
      payload: points
    })
  }
}


