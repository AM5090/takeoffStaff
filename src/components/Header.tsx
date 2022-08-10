import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import logo from '../logo.svg';

export function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    <img src={logo} className="App-logo" alt="logo" />
                </Typography>
                <Typography sx={{ flexGrow: 1, textAlign: 'start' }}>
                    Takeoff Staff
                </Typography>
                <Button variant="outlined" color="inherit">
                    Log Out
                </Button>
            </Toolbar>
        </AppBar>
    );
}