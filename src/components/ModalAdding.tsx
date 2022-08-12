import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { contactsPostAsyncRequest, contactsPutAsyncRequest, IContactItem } from "../store/rootAction";

interface IModalAddingProps {
    title?: string,
    onClose?: () => void,
}

export function ModalAdding({title, onClose}: IModalAddingProps) {

    const [nameValue, setNameValue] = useState<string>('');
    const [phoneValue, setPhoneValue] = useState<string>('');
    const dispatch = useDispatch();


    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        setNameValue(event.target.value);
    }

    function handleChangePhone(event: ChangeEvent<HTMLInputElement>) {
        setPhoneValue(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const addContact = {name: nameValue, phone: phoneValue};
        dispatch(contactsPostAsyncRequest(addContact));
        onClose?.();
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
                    <Button type="submit" color="success">Сохранить</Button>
                </DialogActions>
            </Box>
        </>
    );
}