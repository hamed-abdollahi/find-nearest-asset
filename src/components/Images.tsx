import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import "../components/Images.css"
import { actionCreators, State } from '../state';
import seeMore from "../images/seeMore.png"
const Images: React.FC<{ images: string[] }> = ({ images }) => {
    const dispatch = useDispatch();
    const { showPlaceList , showGallery , showClose , setImages} = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        setImages(images)
    });

    const openImage = (image: string) => {
        showPlaceList(false)
        showClose(false)
        showGallery(true)
    }
    return (
        <div id="placeImages">
            {
                images.map((image, index) =>
                    index < 3 ?
                        (
                            <div key ={index} onClick={e => openImage(image)}>
                                <img src={image} />
                            </div>
                        ) : ""

                )

            }
            <div onClick={e => openImage('')}>
                <img src={seeMore}  />
            </div>
        </div>
    )
}

export default Images