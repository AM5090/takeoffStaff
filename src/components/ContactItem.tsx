import { IconButton, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Modal } from "./Modal";
import { useState } from "react";
import { ModalInfo } from "./ModalInfo";
import { ModalAction } from "./ModalAction";
import { IContactItem } from "../store/rootAction";

interface IContactItemProps {
    contactItem: IContactItem;
}

export function ContactItem({contactItem}: IContactItemProps) {

    const [openDelete, setOpenDelete] = useState<boolean>(false); 
    const [openEdit, setOpenEdit] = useState<boolean>(false);    



    function handleClickDelete() {
        setOpenDelete(true);
    }

    function handleClickEdit() {
        setOpenEdit(true);
    }

    return (
        <>
        <Grid item xs={12} md={6}>
            <Card sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <CardContent sx={{textAlign: 'start'}}>
                    <Typography>{contactItem.name}</Typography>
                    <Typography>{contactItem.phone}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton size="small" onClick={handleClickEdit}>
                        <ModeEditOutlineOutlinedIcon color="success"/>
                    </IconButton>
                    <IconButton size="small" onClick={handleClickDelete}>
                        <DeleteOutlinedIcon color="error"/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
        
        <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
            <ModalInfo 
                title="Вы точно хотите удалить контакт?"
                contactItem={contactItem}
                onClose={() => setOpenDelete(false)}
            />
        </Modal>

        <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
            <ModalAction 
                title="Внесите новые данные"
                contactItem={contactItem}
                onClose={() => setOpenEdit(false)}
            />
        </Modal>
        </>
    );
}