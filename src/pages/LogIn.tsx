import { Box, Button, Container, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInAsyncRequest, logInTouchedAction } from "../store/rootAction";
import { RootState } from "../store/rootReducer";
import { useNavigate } from "react-router-dom";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


export function Login() {

    const [nameValue, setNameValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');

    const logIn = useSelector<RootState, boolean>(state => state.logIn);
    const logInTouched = useSelector<RootState, boolean>(state => state.logInTouched);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(logIn) {
            setNameValue('');
            setPassValue('');
            navigate('/contacts');
        }
    }, [logIn])

    function handleNameValue(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        const replaceInName = text.replace(/\W/g, '');
        setNameValue(replaceInName);
    }

    function handlePassValue(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        const replaceInPass = text.replace(/\W/g, '');
        setPassValue(replaceInPass);
    }

    function handleLogIn(event: FormEvent) {
        event.preventDefault();
        const personAuth = { name: nameValue, pass: passValue };
        dispatch(logInTouchedAction(true));
        dispatch(logInAsyncRequest(personAuth));
        
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
                        {logInTouched && !logIn && (<FormHelperText  sx={{color: 'red'}}>Не верный логин или пароль</FormHelperText>)}
                        <Button variant="text" type="submit" sx={{mt: '20px'}}>Log in</Button>
                        <Box>
                            
                            <FormHelperText sx={{display: 'flex', alignItems: 'flex-start', fontSize: '14px', lineHeight: 'normal'}}>
                                <HelpOutlineOutlinedIcon sx={{fontSize: "18px"}} color="action"/>
                                Для теста введите следующие данные:
                            </FormHelperText>
                            <FormHelperText sx={{lineHeight: 'normal'}}>name: Json</FormHelperText>
                            <FormHelperText sx={{lineHeight: 'normal'}}>pass: 1234</FormHelperText>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
}

