import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { CardContent } from '@mui/material';

export default function ShowSystem() {
  let s = {
    topic: "",
    urlName: "",
    urlImage: "",
    objectName: "",
    managerUid: "",
    description: "",
};
  const [system, setSystem] = useState(s);
  const {id,name} =useParams();
    useEffect(() => {
        ShowDetails(id||'');
    }, []);

    const ShowDetails=async (id:string) => {
        var config = {
            method: 'get',
            url: `http://localhost:3333/system/${id}`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setSystem(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

  return (
    // <Card variant="outlined" sx={{ minWidth: '320px' }}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
    //     <Typography level="h1" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
    //      System_Details:
    //     </Typography>
    //   </Box>
    //   <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
    //     <img src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270" alt="" />
    //   </AspectRatio>
    //   <Box sx={{ display: 'flex' }}>
    //     <div>
    //       <Typography level="body3">{}</Typography>
    //       <Typography fontSize="lg" fontWeight="lg"></Typography>
    //     </div>
    //   </Box>
    // </Card>
    <Card sx={{ maxWidth: 345 }} >
                    <CardContent>
                    {/* <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                    <img src="{`$system.urlImage`}" alt="" />
                   </AspectRatio> */}
                   <img className='img'
                            src={`${system.urlImage}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${system.urlImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            
                            loading="lazy" height={"300"} width={"400"}></img>
                        <form className='auth-inner'>
                            <Typography >The system</Typography>
                            <div className="mb-3">
                                <Typography >topic:  {system.topic}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography >urlName:   {system.urlName}</Typography>
                            </div>
                            {/* <div className="mb-3">
                                <Typography >urlImage:   {system.urlImage}</Typography>
                            </div> */}
                            <div className="mb-3">
                                <Typography >objectName:   {system.objectName}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography >managerUid :   {system.managerUid}</Typography>
                            </div>
                            <div className="mb-3">
                                <Typography >description:   {system.description}</Typography>
                            </div>
                           
                            <div className="d-grid">
                                {/* <Button onClick={Delete} startIcon={<DeleteIcon />}></Button>
                                <Button onClick={() => setEdit(true)} startIcon={<ModeEditOutlineIcon />}></Button> */}
                            </div>
                        </form>
                    </CardContent>
                </Card>
  );
}



