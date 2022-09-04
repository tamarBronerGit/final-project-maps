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
import locationStore from "../../data/location";
import { observer } from "mobx-react-lite";

export function FormDialogLocation() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const inputAddress=useRef<HTMLInputElement>();
    const inputOwner =useRef<HTMLInputElement>();
    const inputCommunication =useRef<HTMLInputElement>();
    const inputDetails=useRef<HTMLInputElement>();
    const inputNotes=useRef<HTMLInputElement>();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addLocation= async()=>{

        const dataLocation={
            address:inputAddress.current?.value,
            owner: inputOwner.current?.value,
            communication: inputCommunication.current?.value,
            details: inputDetails.current?.value,
            notes: inputNotes.current?.value
           }
           console.log(dataLocation)
        try {   
            // await locationStore.createLocationsBySystemId(dataLocation)  ;
            // let tempList = await res.data;
            // console.log(res)
            alert(`add ${dataLocation.details}successfully`);
        } catch (error) { console.log(error); }
        finally{setOpen(false);}
        

    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => { handleClickOpen() }}>Click to Add system </Button>
            </Stack>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new location</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        please enter your location details here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                        
                        <div>
                            <TextField inputRef={inputAddress}               label="enter location address"               placeholder="location address"                variant="standard" />
                            <TextField inputRef={inputOwner }            label="enter location owner"             placeholder="location owner "             variant="standard" />
                            <TextField inputRef={inputCommunication}            label="enter location communication"            placeholder="location communication"             variant="standard" />
                            <TextField inputRef={inputDetails}          label="enter location details"          placeholder="location details"           variant="standard" />
                            <TextField inputRef={inputNotes}          label="enter location notes"          placeholder="location notes"           variant="standard" />
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addLocation}>enter to add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
    }
}

// export default observer(FormDialogLocation);