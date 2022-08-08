import { Box, Button, Container, FormControl, Grid, Input, InputAdornment, InputLabel } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export function Control() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: '30px' }}>
            <FormControl fullWidth sx={{mr: '10px'}}>
                <InputLabel>Search</InputLabel>
                <Input type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <Button startIcon={<SearchOutlinedIcon />}>
                                search
                            </Button>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button size="small" variant="contained" color="success" startIcon={<AddOutlinedIcon />}>
                add
            </Button>
        </Box>
    );
}