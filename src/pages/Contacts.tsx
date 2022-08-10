import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactItem } from "../components/ContactItem";
import { Control } from "../components/Control";
import { contactsAsyncRequest, IContactItem } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function Contacts() {

    const contacts = useSelector<RootState, IContactItem[]>(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsAsyncRequest());
    }, []);

    return (
        <>
        <Container sx={{mt: '15px'}}>
            
            <Control/>

            <Grid container spacing={2}>
                {contacts.map((contactItem) => (
                    <ContactItem key={contactItem.id}
                        contactItem={contactItem}
                    />
                ))}
            </Grid>
        </Container>

        
        </>
    );
}