import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { contactsPutAsyncRequest, IContactItem } from "../store/rootAction";

interface IModalActionProps {
    title?: string,
    onClose?: () => void,
    contactItem: IContactItem,
}

export function ModalAction({title, onClose, contactItem}: IModalActionProps) {

    const [nameValue, setNameValue] = useState(contactItem?.name);
    const [phoneValue, setPhoneValue] = useState(contactItem?.phone);
    const dispatch = useDispatch();


    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        setNameValue(event.target.value);
    }

    function handleChangePhone(event: ChangeEvent<HTMLInputElement>) {
        setPhoneValue(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const editedContact = {name: nameValue, phone: phoneValue};
        dispatch(contactsPutAsyncRequest(contactItem?.id, editedContact));
    }

    return (
        <>
            <DialogTitle sx={{color: 'gray', fontSize: '1rem', fontWeight: '400', pb: 0}}>{title}</DialogTitle>
            <Box component="form" onSubmit={handleSubmit}>
                <DialogContent sx={{display: 'flex', flexDirection: 'column', pt: '0px'}}>
                    <TextField value={nameValue} onChange={handleChangeName} sx={{mt: '20px'}} size="small" label="Name" type="text" variant="outlined" />
                    <TextField value={phoneValue} onChange={handleChangePhone} sx={{mt: '20px'}} size="small" label="Phone" type="tel" variant="outlined" />
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={onClose}>Отмена</Button>
                    <Button type="submit" color="success" onClick={onClose}>Сохранить</Button>
                </DialogActions>
            </Box>
        </>
    );
}