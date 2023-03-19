import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
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
const MainPage = () => {
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
      </div>
    </Box>
  );
}
export default MainPage;