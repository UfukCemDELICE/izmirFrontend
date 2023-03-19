import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
const types = [
  {
    value: 'Vatandaş',
    label: 'Vatandaş',
  },
  {
    value: 'Yabancı',
    label: 'Yabancı',
  },
];
const DepremBagis = () => {
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
          Deprem Bağışı
        </Typography>
        
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Başvuru Tipini Seçiniz"
          helperText="Başvuru Tipini Seçiniz"
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <TextField
            id="outlined-select-currency"
            helperText="İsim"
            label="required"
          />
        <br/>
        <TextField
            id="outlined-select-currency"            
            helperText="Soyisim"
            label="required"
          />
          <br/>
        <TextField
            id="outlined-select-currency"           
            helperText="Kimlik Numarası"
            label="required"
            type='number'
          />
          <br/>
          <FormControlLabel control={<Checkbox />} label="KVKK Hakkında" />
          <br/>
          <br/>
          <Button variant="contained" color='success'> Başvuru Yap </Button>
      </div>
    </Box>
  )
};

export default DepremBagis;
