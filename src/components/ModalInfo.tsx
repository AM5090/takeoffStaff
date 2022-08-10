import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface IModalInfoProps {
    title?: string,
    onClose?: () => void,
}

export function ModalInfo({title, onClose}: IModalInfoProps) {
    return (
        <>
            <DialogTitle sx={{color: 'gray', fontSize: '1rem', fontWeight: '400'}}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Json Stathem
                </DialogContentText>
                <DialogContentText>
                    +777 777 77 77
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={onClose}>Да</Button>
                <Button color="success" onClick={onClose}>Нет</Button>
            </DialogActions>
        </>
    );
}