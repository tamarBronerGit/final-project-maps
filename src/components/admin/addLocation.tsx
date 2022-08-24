import React, { useRef } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import axios from 'axios'

export function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const inputAddress=useRef<HTMLInputElement>();
    const inputOwner =useRef<HTMLInputElement>();
    const inputCommunication =useRef<HTMLInputElement>();
    const inputDetails=useRef<HTMLInputElement>();
    const inputNotes=useRef<HTMLInputElement>();
    }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value);
    // };
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };