import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import axios from 'axios';
import { useEffect } from 'react';

export default function ShowSystem(id:string) {

    useEffect(() => {
        ShowDetails(id);
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
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }

  return (
    <Card variant="outlined" sx={{ minWidth: '320px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography level="h1" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
         System_Details:
        </Typography>
      </Box>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270" alt="" />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">####</Typography>
          <Typography fontSize="lg" fontWeight="lg">####</Typography>
        </div>
      </Box>
    </Card>
  );
}



