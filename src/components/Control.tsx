import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { contactsAsyncRequest, contactsSearchAsyncRequest } from "../store/rootAction";

interface IControlProps {
    openAdding?: () => void,
}

export function Control({openAdding}: IControlProps) {

    const [searchValue, setSearchValue] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);
    const dispatch = useDispatch();

    function handleSearchValue(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        const replaceSearch = text.replace(/\W/g, '');
        setSearchValue(replaceSearch);
    }

    function handleСleaning() {
        if(touched) {
            setSearchValue('');
            dispatch(contactsAsyncRequest());
            setTouched(false);
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (searchValue !== '') {
            setTouched(true);
            dispatch(contactsSearchAsyncRequest(searchValue));
        } else if(searchValue === '' && touched) {
            setTouched(false);
            dispatch(contactsAsyncRequest());
        }
    }
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: '30px' }}>
            <Button size="small" 
                variant="contained" 
                color="success" 
                onClick={openAdding}
                startIcon={<AddOutlinedIcon />}
            >
                add
            </Button>
            <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', ml: '20px'}}>
                <IconButton sx={{m: '0px 4px 4px 0px', p: '2px'}} 
                    onClick={handleСleaning}
                >
                    <HighlightOffOutlinedIcon  />
                </IconButton>
                <FormControl fullWidth>
                    <InputLabel>Search</InputLabel>
                    <Input type="text"
                        value={searchValue}
                        onChange={handleSearchValue}
                        endAdornment={
                            <InputAdornment position="end">
                                <Button type="submit" startIcon={<SearchOutlinedIcon />}>
                                    search
                                </Button>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
        </Box>
    );
}