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
    const dispatch = useDispatch();

    function handleSearchValue(event: ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value);
    }

    function handleСleaning() {
        setSearchValue('');
        dispatch(contactsAsyncRequest());
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (searchValue !== '') {
            dispatch(contactsSearchAsyncRequest(searchValue));
        } else {
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
                <IconButton sx={{p: '0px 4px 12px 0px', height: '20px'}} 
                    size="small"
                    onClick={handleСleaning}
                >
                    <HighlightOffOutlinedIcon />
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