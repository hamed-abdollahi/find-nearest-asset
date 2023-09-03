import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { JsxElement } from 'typescript';
import "../components/PlaceDetail.css"
import { DetailModel, DetailType, PlaceModel, RestaurantDetailInventoryData, RestaurantDetailInventoryVars, RestaurantInventoryData, RestaurantInventoryVars } from '../interfaces/AllInterface';
import { actionCreators, State } from '../state';
import "../components/PlaceDetail.css"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import ShareIcon from '@mui/icons-material/Share';
import RouteIcon from '@mui/icons-material/Route';
import { Avatar, Button, CircularProgress, Rating } from '@mui/material';
import TabDetail from './TabDetail';
import useWindowDimensions from '../hooks/useWindowDimensions';


const PlaceDetail: React.FC<{ place: PlaceModel }> = ({ place }) => {
    const { height, width } = useWindowDimensions();
    const dispatch = useDispatch();
    const { showDetail, showEdge } = bindActionCreators(actionCreators, dispatch);
    const close = useSelector((state: State) => state.close)
    const [elm, setElm] = useState<DetailModel>()

    const onClose = () => {
        showDetail(false)
        showEdge(true)
    }
    //<div id="d-overlay" style={{ backgroundImage: `url(${elm?.backImage})` }}></div>

    return (
        <>
            <div id="placeDetail" style={{ height: height }}>
                <div id="d-overlay" style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8v1kya_F2ezNy3vDZ6qDY654ZIcqxd0Mzu3HXTk1-Y0_7YeCyxPwjck5cnabz_ispAtI&usqp=CAU)` }}>
                    <div style={{ margin: '12px' }}>
                        <div id="social">
                            <BookmarkBorderIcon fontSize='medium' />
                            <span>save</span>
                            <ShareIcon fontSize='medium' />
                            <span>save</span>
                            <RouteIcon fontSize='medium' />
                            <span>save</span>
                        </div>
                        <div>
                            <Rating
                                name="simple-controlled"
                                value={place.rate}
                                precision={0.5}
                                size={'small'}
                                readOnly
                            />

                        </div>
                        <div>{place.name}</div>
                        <div className='category'>
                            {place.category.join('/')}
                        </div>
                        <div>
                            {place.description}
                        </div>
                        <div style={{ marginTop: '26px' }}>
                            <Button variant="contained" color="success" endIcon={<PhoneInTalkIcon />}>
                                Make Reservation
                            </Button>
                        </div>
                        <div className='avatar'>
                            <Avatar
                                alt="Remy Sharp"
                                src={place.icon}
                                sx={{ width: 56, height: 56 }}
                            />

                        </div>
                        <div id="opacity"></div>
                    </div>

                </div>
                <TabDetail id={place.id} /> 
            </div>
            {
                close ? (
                    <div id="detailEdges">
                        <div onClick={e => onClose()}>
                            <CloseIcon fontSize='small' />
                        </div>
                    </div>
                ) : ""
            }


        </>

    )
}

export default PlaceDetail