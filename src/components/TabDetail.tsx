import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import PlaceLst from './PlaceLst';
import { CircularProgress, Pagination } from '@mui/material';
import Slick from './Slick';
import { DetailModel, RestaurantDetailInventoryData, RestaurantDetailInventoryVars } from '../interfaces/AllInterface';
import Images from './Images';
import "../components/TabDetail.css"
import OtherDetail from './OtherDetail';
import { State } from '../state';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_RestaurantDetail_INVENTORY } from '../graphQl/enum';
import { useEffect } from 'react';


const TabDetail: React.FC<{ id: string }> = ({ id }) => {
    const [value, setValue] = React.useState<string>('1');
    const [detail, setDetail] = React.useState<DetailModel>();
    
    console.log(id)
    

    const { loading, data } = useQuery<RestaurantDetailInventoryData, RestaurantDetailInventoryVars>(
        GET_RestaurantDetail_INVENTORY,
        { variables: { resId: id }}
    );

    useEffect(() => {
        if (!loading) {
            let elm = data?.getRestaurantDetail;
            setDetail(elm);
            console.log('de',detail)
        }
    },[data]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            {
                loading ? (<div className='loading' ><CircularProgress /></div>) :
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        { 
                            detail ? (
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Contact" value="1" />
                                            <Tab label="Info" value="2" />
                                            <Tab label="Reviews" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <Slick foods={detail.foods} />
                                        <Images images={detail.placeImage} />
                                        <OtherDetail place={detail} />
                                    </TabPanel>
                                    <TabPanel value="2">

                                        2
                                    </TabPanel>
                                    <TabPanel value="3">
                                        3

                                    </TabPanel>

                                </TabContext>
                            ) : ""
                        }
                    </Box>
            }

        </>

    );
}

export default TabDetail