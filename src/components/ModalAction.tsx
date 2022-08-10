import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

interface IModalInfoProps {
    title?: string,
    onClose?: () => void,
}

export function ModalAction({title, onClose}: IModalInfoProps) {
    return (
        <>
            <DialogTitle sx={{color: 'gray', fontSize: '1rem', fontWeight: '400', pb: 0}}>{title}</DialogTitle>
            <DialogContent sx={{display: 'flex', flexDirection: 'column'}}>
                <TextField sx={{mt: '20px'}} size="small" label="Name" type="text" variant="outlined" />
                <TextField sx={{mt: '20px'}} size="small" label="Phone" type="tel" variant="outlined" />
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={onClose}>Отмена</Button>
                <Button color="success" onClick={onClose}>Сохранить</Button>
            </DialogActions>
        </>
    );
}