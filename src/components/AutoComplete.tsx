import React, { FunctionComponent , useEffect , useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CountriesList, ComboType } from "../interfaces/AllInterface"

const AutoComplete: React.FC<CountriesList> = ({ countries }) => {
    const [value, setValue] = useState<Number | null | undefined>(null);
    useEffect(() => {
       
      },[]);
    return (
        <>
           
            <Autocomplete
                disablePortal
                onChange={(event, value) => setValue(value?.value)}
                getOptionLabel={(option) => option.label}
                options={countries}
                sx={{ width: 170 }}
                renderInput={(params) => <TextField {...params} label="Category" />}
                size="small"
            />
        </>

    )
}

export default AutoComplete