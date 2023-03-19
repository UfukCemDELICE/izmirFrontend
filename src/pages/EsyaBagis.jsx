import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const status = [
  {
    value: 'sıfır',
    label: 'Sıfır',
  },
  {
    value: 'ikinci el',
    label: 'İkinci El',
  },
];
const EsyaBagis = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h5" gutterBottom>
          Eşya Bağışı
        </Typography>
        
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Eşyanın Durumu"
          helperText="Eşyanın Durumu"
        >
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
            id="outlined-select-currency"
            helperText="Marka"
          />
        <br/>
        <TextField
            id="outlined-select-currency"            
            helperText="Model"
          />
          
        <TextField
            id="outlined-select-currency"   
            type='number'        
            helperText="Adet"
          />
          
          <br/>
          <br/>
          <Button variant="contained" color='success'> Gönder </Button>
      </div>
    </Box>
  )
}
export default EsyaBagis
