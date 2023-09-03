import { Viewer } from 'cesium';
import { CesiumComponentRef } from 'resium';
import { PlaceModel, PointType } from '../../interfaces/AllInterface';
import { actionType } from '../action-types/index'

interface showDetail  {
     type : actionType.showDetail ;
     payload: boolean;
}
interface showEdge  {
    type : actionType.showEdge ;
    payload: boolean;
}
interface showClose  {
    type : actionType.showClose;
    payload: boolean;
}

interface showPlaceList  {
    type : actionType.showPlaceList ;
    payload: boolean;
}
interface showGallery  {
    type : actionType.showGallery ;
    payload: boolean;
}

interface setPlace  {
    type : actionType.setPlace ;
    payload: PlaceModel;
}

interface setViewer  {
    type : actionType.setViewer ;
    payload: React.RefObject<CesiumComponentRef<Viewer>>;
}

interface setImages  {
    type : actionType.setImages ;
    payload: string[];
}

interface setPoints  {
    type : actionType.setPoints ;
    payload: PointType[];
}

interface setPage  {
    type : actionType.setPage ;
    payload: number;
}

interface setTotal  {
    type : actionType.setTotal ;
    payload: number;
}


interface getPlace  {
    type : actionType.getPlace 
}


export type DetailAction = showDetail
export type EdgeAction = showEdge
export type CloseAction = showClose
export type PlaceListAction = showPlaceList
export type GalleryAction = showGallery
export type PlaceAction = setPlace |  getPlace 
export type ImagesAction = setImages 
export type PointsAction = setPoints 
export type ViewerAction = setViewer 
export type PageAction = setPage 
export type TotalAction = setTotal 


