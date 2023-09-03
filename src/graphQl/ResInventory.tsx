import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { PlaceModel, PointType, RestaurantInventoryData, RestaurantInventoryVars } from '../interfaces/AllInterface';
import { Avatar, Box, CircularProgress, Rating, Skeleton } from '@mui/material'
import './ResInventory.css'
import { GET_Restaurant_INVENTORY } from './enum';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../state';



const ResInventory: React.FC<{ start: number }> = ({ start }) => {
    const dispatch = useDispatch();
    const { showDetail, setPlace, showEdge, setPoints, setTotal } = bindActionCreators(actionCreators, dispatch);
    const detail = useSelector((state: State) => state.detail)
    const [lst, setLst] = useState<PlaceModel[]>([])

    const { loading, data, error } = useQuery<RestaurantInventoryData, RestaurantInventoryVars>(
        GET_Restaurant_INVENTORY,
        { variables: { start: start } }
    );

    useEffect(() => {
        if (!loading) {
            let total = data?.getRestaurantsLst![0].count!
            let res = data?.getRestaurantsLst!;
            var points: PointType[] = []
            res.map((place, index) => {
                if (place.lat && place.lng)
                    points.push({ id: place.id, lat: place.lat, lng: place.lng })
            })
            setLst(res)
            setPoints(points)
            setTotal(total)
        }

    }, [data])

    const getDetail = (place: PlaceModel) => {
        showEdge(false)
        setPlace(place)
        if (!detail)
            showDetail(true)
    }

    return (
        <>
            {
                loading ? (<div className='loading' ><CircularProgress /></div>) :
                    lst.map((place, index) => <div className='bbox' key={index.toString()} onClick={() => getDetail(place)}>
                        {place ?
                            (
                                <div className='place-left'>
                                    <div>
                                        {place.name}
                                    </div>
                                    <div className='place-types'>
                                        {place.category.join('/')}
                                    </div>
                                    <div>
                                        {place.description}
                                    </div>
                                </div>
                            ) :
                            (
                                <Box sx={{ pt: 0.5 }}>
                                    <Skeleton variant="rounded" width="100%" height={30} />
                                    <Skeleton width="60%" />
                                    <Skeleton variant="rounded" width="100%" height={50} />
                                </Box>
                            )}



                        <div className='place-right'>
                            <Avatar
                                alt="Remy Sharp"
                                src={place.icon}
                                sx={{ width: 56, height: 56 }} />
                            <Rating
                                name="simple-controlled"
                                value={place.rate}
                                precision={0.5}
                                size={'small'}
                                readOnly />

                        </div>

                    </div>
                    )}
        </>
    )
}

export default ResInventory

