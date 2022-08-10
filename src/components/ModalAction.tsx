import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { IContactItem } from "../store/rootAction";

interface IModalActionProps {
    title?: string,
    onClose?: () => void,
    contactItem?: IContactItem,
}

export function ModalAction({title, onClose, contactItem}: IModalActionProps) {
    return (
        <>
            <DialogTitle sx={{color: 'gray', fontSize: '1rem', fontWeight: '400', pb: 0}}>{title}</DialogTitle>
            <DialogContent sx={{display: 'flex', flexDirection: 'column'}}>
                <TextField defaultValue={contactItem?.name} sx={{mt: '20px'}} size="small" label="Name" type="text" variant="outlined" />
                <TextField defaultValue={contactItem?.phone} sx={{mt: '20px'}} size="small" label="Phone" type="tel" variant="outlined" />
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={onClose}>Отмена</Button>
                <Button color="success" onClick={onClose}>Сохранить</Button>
            </DialogActions>
        </>
    );
}