import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logInAsyncRequest } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function Login() {

    const [nameValue, setNameValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');

    const logIn = useSelector<RootState, boolean>(state => state.logIn);
    const dispatch = useDispatch();

    function handleNameValue(event: ChangeEvent<HTMLInputElement>) {
        setNameValue(event.target.value);
    }

    function handlePassValue(event: ChangeEvent<HTMLInputElement>) {
        setPassValue(event.target.value);
    }

    function handleLogIn(event: FormEvent) {
        event.preventDefault();
        const personAuth = { name: nameValue, pass: passValue };
        dispatch(logInAsyncRequest(personAuth));
        if(logIn) {
            setNameValue('');
            setPassValue('');
        }
    }

    return (
        <Container sx={{mt: '15px'}}>
            <Grid container justifyContent="center" alignItems="center" sx={{height: '400px'}}>
                <Grid item >

                    <Box component="form" 
                        sx={{ boxShadow: 3, p: '20px', display: 'flex', flexDirection: 'column' }}
                        onSubmit={handleLogIn}
                    >
                        <Typography color="gray">
                            Введите ваше имя и пароль для авторизации
                        </Typography>
                        <TextField type="text" 
                            value={nameValue}
                            onChange={handleNameValue}
                            variant="outlined" 
                            label="Name" 
                            size="small" 
                            sx={{mt: '20px'}} 
                        />
                        <TextField type="password" 
                            value={passValue}
                            onChange={handlePassValue}
                            variant="outlined" 
                            label="Password" 
                            size="small" 
                            sx={{mt: '20px'}}
                        />
                        {logIn && <span>log in</span>}
                        <Button variant="text" type="submit" sx={{mt: '20px'}}>Log in</Button>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
}

