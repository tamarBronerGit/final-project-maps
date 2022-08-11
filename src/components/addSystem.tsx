import Stack from '@mui/material/Stack';
import * as React from 'react';
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addSystem= async()=>{
        alert('add');
            const dataSystem={
                "topic":"ssssss",
                "urlName": "string",
                "urlImage": "string",
                "objectName": "string",
                "managerUid": "string",
                "description": "string",
                "communicationDetails":"Object"
               }
               console.log(dataSystem)
        try {     
            const res = await axios.post(`http://localhost:3333/system/`,dataSystem);
            let tempList = await res.data;
            console.log(res)
            // swal("your system added!!", "You clicked the button!", "success");
        //    setSystems(tempList);
        } catch (error) { console.log(error); }
        finally{setOpen(false);}
        
    }

    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => { handleClickOpen() }}>Click to Add system </Button>
            </Stack>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new system</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        please enter your system details here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                        
                        <div>
                            <TextField
                                id="name"
                                label="enter name system"
                                placeholder="name system"
                                variant="standard"
                            />
                            <TextField
                                id="topic"
                                label="enter topic system"
                                placeholder="topic system"
                                variant="standard"
                            />
                            <TextField
                                id="des"
                                label="enter description system"
                                placeholder="description system"
                                variant="standard"
                            />
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addSystem}>enter to add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

