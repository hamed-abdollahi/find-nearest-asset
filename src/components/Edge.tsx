import React, { useState } from 'react'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import "../components/Edge.css"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from 'react-redux';



const Edge = () => {

    const dispatch = useDispatch();
    const { showPlaceList  } = bindActionCreators(actionCreators, dispatch);
    const placeList = useSelector((state: State) => state.placeList)
    
    const changeSidebar = () => {
        showPlaceList(!placeList)
    }

    return (
        <div id="edge" onClick={e => changeSidebar()}>
            {
                placeList ? <KeyboardArrowLeft fontSize='small' /> : <KeyboardArrowRight fontSize='small' />
            }

        </div>
    )
}

export default Edge