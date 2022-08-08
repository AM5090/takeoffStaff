import { IconButton, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export function ContactItem() {
    return (
        <Grid item xs={12} md={6}>
            <Card sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <CardContent sx={{textAlign: 'start'}}>
                    <Typography>Mikle</Typography>
                    <Typography>+7 777 777 77 77</Typography>
                </CardContent>
                <CardActions>
                    <IconButton size="small" >
                        <ModeEditOutlineOutlinedIcon color="success"/>
                    </IconButton>
                    <IconButton size="small" >
                        <DeleteOutlinedIcon color="error"/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}