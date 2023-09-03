import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "../components/Slick.css"
import { FoodType } from '../interfaces/AllInterface';


const Slick: React.FC<{ foods: FoodType[] }> = ({ foods }) => {

    return (
        <div id="slick" style={{position:"relative"}}>
            <Carousel
                plugins={[
                    'arrows',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    },
                ]}
            >
                {
                    foods.map((food, index) =>
                       <div key={index}>
                           <img  className='slider-img' src={food.image} />
                           <div className='food-name'>{food.name}</div>
                           <div className='food-price'>{food.price}</div>

                       </div>
                        
                    )
                }
            </Carousel>
        </div>

    )
}

export default Slick

