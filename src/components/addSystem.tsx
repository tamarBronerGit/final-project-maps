
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function BasicButtons() {
    
  return (
    <div>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {
            alert('clicked');

        }}>add system </Button>
    </Stack>
    </div>
    
  );
}
