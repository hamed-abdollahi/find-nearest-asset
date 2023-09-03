import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { actionCreators } from '../state';
import "../components/Gallery.css"
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Gallery: React.FC<{ images: string[] }> = ({ images }) => {
    const { height, width } = useWindowDimensions();
    const dw = width - 300
    const dispatch = useDispatch();
    const { showGallery, showClose } = bindActionCreators(actionCreators, dispatch);
    const [index, setIndex] = useState<number>(0)


    useEffect(() => {

    });

    const closeGallery = () => {
        showGallery(false)
        showClose(true)
    }

    const selectImage = (mood: number) => {
        if (mood == 0) {
            if (index > 0) {
                setIndex(index - 1)

            }
        }
        else {
            if (index < images.length - 1) {
                setIndex(index + 1)

            }

        }

    }

    return (
        <div id="imageOverlay" style={{ height: height, width: width - 370 }}>
            <div id="divBtn" style={{ flex: 1 }}>
                <div id="closeBtn">
                    <IconButton aria-label="delete" size="large" onClick={e => closeGallery()}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <div id="nextBtn">
                    <IconButton aria-label="delete" size="large" onClick={e => selectImage(0)}>
                        <ArrowBackIosNewIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" size="large" onClick={e => selectImage(1)}>
                        <ArrowForwardIosIcon fontSize="inherit" />
                    </IconButton>

                </div>
                <div id='counter'>{(index + 1)} of {images.length}</div>
            </div>
            <div style={{ flex: 4 }}>
                <div id='baseImage'>
                    <div style={{ flex: 1 }}></div>
                    <div style={{ flex: 4, textAlign: 'center' }}>
                        <img src={images[index]} />
                    </div>
                    <div style={{ flex: 1 }}>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Gallery