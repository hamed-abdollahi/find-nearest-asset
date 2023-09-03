import { Avatar, Box, listItemAvatarClasses, Pagination, Rating, Skeleton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PlaceDetail from '../components/PlaceDetail';
import '../components/PlaceLst.css'
import { CountriesList, ComboType, PlaceList, PlaceModel, DetailType, PointType } from "../interfaces/AllInterface"
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import ResInventory from '../graphQl/ResInventory';



const PlaceLst: React.FC = () => {

    const [index, setIndex] = useState<number>(1)
    const [start, setStart] = useState<number>(0)

    const [placeLst, setplaceLst] = useState<PlaceModel[]>([])
    const dispatch = useDispatch();
    const { setPage } = bindActionCreators(actionCreators, dispatch);
    const page = useSelector((state: State) => state.page)
    const total = useSelector((state: State) => state.total)

    useEffect(() => {
        fetchPlaces(page)
    }, []);

    const fetchPlaces = (value: number | undefined) => {
        let ind: number = value ? value : index
        let start: number = (ind - 1) * 10
        setStart(start)
        setIndex(index + 1)
        if (value)
            setPage(value)

    }

    return (
        <div>
            {
                <ResInventory start={start} />
            }
            <Pagination
                className='pagination'
                defaultPage={page}
                count={Math.ceil(total / 10)}
                onChange={(event, value) => fetchPlaces(value)} />

        </div>
    )
}

export default PlaceLst