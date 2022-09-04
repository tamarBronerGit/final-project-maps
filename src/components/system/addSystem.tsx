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
import { InputBaseComponentProps } from '@mui/material';
import { useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Role, User } from '../user';

export function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    
    const _auth= getAuth();
    const [user,loading,error]=useAuthState(_auth);

    const inputSubject              =useRef<HTMLInputElement>();
    const inputName                 =useRef<HTMLInputElement>();
    const inputUrlImage              =useRef<HTMLInputElement>();
    const inputAdmin_id             =useRef<HTMLInputElement>();
    const inputDescription          =useRef<HTMLInputElement>();
    const inputCommunicationDetails =useRef<HTMLInputElement>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const updateUserRole=async ()=>{
    //     const uid= user?.uid;
    //     const data = await (await axios.get<User>(`http://localhost:3333/user/${uid}`)).data;
    //     console.log(data);
    //       let userToUpdate = JSON.stringify({
    //         _id: data._id,
    //         uid: data.uid,
    //         role: Role.manager,
    //         firstName: data.firstName,
    //         lastName: data.lastName,
    //         phone: data.phone,
    //         email: data.email
    //       });
          
    //       var configg = {
    //         method: 'put',
    //         url: `http://localhost:3333/user/${data._id}`,
    //         headers: { 
    //           'Content-Type': 'application/json'
    //         },
    //         data : userToUpdate
    //       };
          
    //       axios(configg)
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
          
    // };


    const addSystem= async()=>{
debugger
            const dataSystem={
                subject:inputSubject.current?.value,
                urlName:inputName.current?.value,              
                urlImage:inputUrlImage.current?.value  ,          
                manager_id:inputAdmin_id.current?.value  ,          
                description:inputDescription.current?.value ,        
                communicationDetails:inputCommunicationDetails.current?.value,
           }
           console.log(dataSystem)
        try {     
            const res = await axios.post(`http://localhost:3333/system/`,dataSystem);
            let tempList = await res.data;
            console.log(res.data);
            alert(`add ${dataSystem.subject} successfully`);
            } 
        
        catch (error) { console.log(error); }
    
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
                            <TextField inputRef={inputSubject}             label="enter Subject system"               placeholder="Subject system"                variant="standard" />
                            <TextField inputRef={inputName }            label="enter Name system"             placeholder="Name system "             variant="standard" />
                            <TextField inputRef={inputUrlImage}            label="enter UrlImage "            placeholder="UrlImage system"             variant="standard" />
                            <TextField inputRef={inputAdmin_id}       label="enter Admin_id"  placeholder="Admin_id"  variant="standard" />
                            <TextField inputRef={inputDescription}         label="enter Description system"         placeholder="Description system"          variant="standard" />
                            <TextField inputRef={inputCommunicationDetails}label="enter CommunicationDetails "placeholder="CommunicationDetails system" variant="standard" />
                        {/* כשלוחצים על הוספת סיסטם=
                         נוסף סיסטם וגם נוצר מנג'ר דש שמכיל פרטי יוזר מחובר ופרטי הסיסטם */}
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

