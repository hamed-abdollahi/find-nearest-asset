import React from 'react'
import { DetailModel } from '../interfaces/AllInterface'
import PushPinIcon from '@mui/icons-material/PushPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "../components/OtherDetail.css"
import { Button } from '@mui/material';
import { State } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import { Cartesian2, Cartesian3, Cartographic, Ellipsoid, HeadingPitchRange, Math, Rectangle, Transforms } from 'cesium';

const OtherDetail: React.FC<{ place: DetailModel }> = ({ place }) => {
    const dispatch = useDispatch();
    const viewer = useSelector((state: State) => state.viewer)
    const points = useSelector((state: State) => state.points)

    const showOnMap = () => {
        let point = points.find(x => x.id == place.resId)!
        if (viewer) {
            viewer.current?.cesiumElement?.camera.flyTo(
                {
                    destination: Cartesian3.fromDegrees(point.lng, point.lat, 200),
                    orientation: {
                        heading: Math.toRadians(256.0),
                        pitch: Math.toRadians(-23.0),
                        roll: 0.0
                    },

                }
            )
        }
    }

    return (
        <div id="otherDetail">
            <div id='description' >
                <p >{place.description}</p>
            </div>
            <div className='det' >
                <PushPinIcon color='info' />
                <div>
                    <p >{place.address}</p>
                    <Button className='dbtn' variant="contained" size="small" onClick={e => showOnMap()}>
                        show on map
                    </Button>
                </div>

            </div>
            <div className='det' >
                <AccessTimeIcon color='info' />
                <p >{place.openingTime}</p>
            </div>
            <div className='det' >
                <LocalPhoneIcon color='info' />
                <p >{place.tel}</p>
            </div>
            <div className='det' >
                <LanguageIcon color='info' />
                <a href={place.website} >{place.website}</a>
            </div>
            <div className='det' >
                <AlternateEmailIcon color='info' />
                <p >{place.email}</p>
            </div>
        </div>
    )
}

export default OtherDetail