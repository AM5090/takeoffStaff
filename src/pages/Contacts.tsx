import { Container, Grid } from "@mui/material";
import { ContactItem } from "../components/ContactItem";
import { Control } from "../components/Control";
import { Modal } from "../components/Modal";

export function Contacts() {
    return (
        <>
        <Container sx={{mt: '15px'}}>
            
            <Control/>

            <Grid container spacing={2}>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
                <ContactItem/>
            </Grid>
        </Container>

        
        </>
    );
}