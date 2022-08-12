import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import logo from '../logo.svg';
import { RootState } from '../store/rootReducer';

export function Header() {

    const logIn = useSelector<RootState, boolean>(state => state.logIn);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    <img src={logo} className="App-logo" alt="logo" />
                </Typography>
                <Typography sx={{ flexGrow: 1, textAlign: 'start' }}>
                    Takeoff Staff
                </Typography>
                {logIn && <Button variant="outlined" color="inherit">
                    Log Out
                </Button>}
            </Toolbar>
        </AppBar>
    );
}