import * as React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import PlaceLst from './PlaceLst';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
import { State } from '../state';


const TabMenu: React.FC = () => {
    const [value, setValue] = React.useState<string>('1');
    const total = useSelector((state: State) => state.total)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={`places(${total})`} value="1" />
                       
                    </TabList>
                </Box>
                <TabPanel value="1">
                     <PlaceLst />
                     
                </TabPanel>
               
            </TabContext>
        </Box>
    );
}

export default TabMenu