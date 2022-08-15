import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import { logInAction, logInTouchedAction } from '../store/rootAction';
import { RootState } from '../store/rootReducer';

export function Header() {

    const logIn = useSelector<RootState, boolean>(state => state.logIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogOut() {
        navigate('/auth');
        dispatch(logInTouchedAction(false));
        dispatch(logInAction(false));
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    <img src={logo} className="App-logo" alt="logo" />
                </Typography>
                <Typography sx={{ flexGrow: 1, textAlign: 'start' }}>
                    Takeoff Staff
                </Typography>
                {logIn && <Button onClick={handleLogOut} variant="outlined" color="inherit">
                    Log Out
                </Button>}
            </Toolbar>
        </AppBar>
    );
}