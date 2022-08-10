import { IconButton, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Modal } from "./Modal";
import { useState } from "react";
import { ModalInfo } from "./ModalInfo";
import { ModalAction } from "./ModalAction";

export function ContactItem() {

    const [openDelete, setOpenDelete] = useState(false); 
    const [openEdit, setOpenEdit] = useState(false);    



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
                    <Typography>Mikle</Typography>
                    <Typography>+7 777 777 77 77</Typography>
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
                onClose={() => setOpenDelete(false)}
            />
        </Modal>

        <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
            <ModalAction 
                title="Внесите новые данные"
                onClose={() => setOpenEdit(false)}
            />
        </Modal>
        </>
    );
}