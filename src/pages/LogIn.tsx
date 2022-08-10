import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

export function Login() {

    return (
        <Container sx={{mt: '15px'}}>
            <Grid container justifyContent="center" alignItems="center" sx={{height: '400px'}}>
                <Grid item >

                    <Box component="form" sx={{ boxShadow: 3, p: '20px', display: 'flex', flexDirection: 'column' }}>
                        <Typography color="gray">
                            Введите ваше имя и пароль для авторизации
                        </Typography>
                        <TextField type="text" variant="outlined" label="Name" size="small" sx={{mt: '20px'}} />
                        <TextField type="password" variant="outlined" label="Password" size="small" sx={{mt: '20px'}}/>
                        <Button variant="text" sx={{mt: '20px'}}>Log in</Button>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
}

