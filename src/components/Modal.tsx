import { Dialog } from "@mui/material";

interface IModalProps {
    open: boolean,
    onClose: () => void,
    children?: React.ReactNode,
}

export function Modal({open, children, onClose}: IModalProps) {

    return (
        <Dialog open={open} onClose={onClose} >
            {children}
        </Dialog>
    );
}