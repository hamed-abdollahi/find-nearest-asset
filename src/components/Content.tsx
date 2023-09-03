import React, { useEffect } from 'react'
import "../components/Content.css"
import AutoComplete from "../components/AutoComplete"
import Edge from "../components/Edge"
import TabMenu from "../components/TabMenu"

import { countries } from "../statics/countries"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import { bindActionCreators } from 'redux'
import PlaceDetail from './PlaceDetail'
import Gallery from './Gallery'
import { PlaceModel } from '../interfaces/AllInterface'

const Content = () => {
    const { height, width } = useWindowDimensions();
    const dispatch = useDispatch();
    const { showPlaceList, showDetail } = bindActionCreators(actionCreators, dispatch);
    const placeList = useSelector((state: State) => state.placeList)
    const detail = useSelector((state: State) => state.detail)
    const place = useSelector((state: State) => state.place)
    const edge = useSelector((state: State) => state.edge)
    const gallery = useSelector((state: State) => state.gallery)
    const images = useSelector((state: State) => state.images)

    return (
        <div>
            {
                placeList ?
                    (
                        <div id='placeList' style={{ height: height }}>
                            <div className='header'>
                                <AutoComplete countries={countries} />
                            </div>
                            <div>
                                <TabMenu />
                            </div>
                        </div>
                    ) : ""
            }
            
            {edge ? <Edge /> : ""}
            {detail ? <PlaceDetail place={place!} /> : ""}
            {gallery ? <Gallery images={images} /> : ""}
        </div>
    )
}

export default Content