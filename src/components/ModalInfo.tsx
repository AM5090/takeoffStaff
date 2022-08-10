import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { IContactItem } from "../store/rootAction";

interface IModalInfoProps {
    title?: string,
    onClose?: () => void,
    contactItem?: IContactItem,
}

export function ModalInfo({title, onClose, contactItem}: IModalInfoProps) {
    return (
        <>
            <DialogTitle sx={{color: 'gray', fontSize: '1rem', fontWeight: '400'}}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {contactItem?.name}
                </DialogContentText>
                <DialogContentText>
                    {contactItem?.phone}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={onClose}>Да</Button>
                <Button color="success" onClick={onClose}>Нет</Button>
            </DialogActions>
        </>
    );
}