import { Box, Dialog, DialogTitle } from "@mui/material";
import { useEffect, useRef } from "react";

interface IModalProps {
    open: boolean,
    onClose: () => void,
    children?: React.ReactNode,
}

export function Modal({open, children, onClose}: IModalProps) {

    const ref = useRef<HTMLDivElement>(null)

    return (
        <Dialog open={open} onClose={onClose} ref={ref}>
            {children}
        </Dialog>
    );
}