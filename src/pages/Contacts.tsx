import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ContactItem } from "../components/ContactItem";
import { Control } from "../components/Control";
import { Modal } from "../components/Modal";
import { ModalAdding } from "../components/ModalAdding";
import { IContactItem } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function Contacts() {

    const [openAdding, setOpenAdding] = useState<boolean>(false);
    const contacts = useSelector<RootState, IContactItem[]>(state => state.contacts);

    return (
        <Container sx={{mt: '15px'}}>
            
            <Control openAdding={() => setOpenAdding(true)}/>

            <Grid container spacing={2}>
                {contacts.map((contactItem: IContactItem) => (
                    <ContactItem key={contactItem.id}
                        contactItem={contactItem}
                    />
                ))}
            </Grid>

            <Modal open={openAdding} onClose={() => setOpenAdding(false)}>
                <ModalAdding
                    title="Укажите новый контакт"
                    onClose={() => setOpenAdding(false)}
                />
            </Modal>

        </Container>

    );
}
