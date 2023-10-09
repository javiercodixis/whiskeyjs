'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select, MenuItem, TextField, FormControl, InputLabel, Button, Box, Checkbox, FormControlLabel } from '@mui/material';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whiskey: string;
  quantity: number;
  address: string;
  ageVerified: boolean;
};

export default function WhiskeyPurchaseForm() {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      whiskey: 'Whiskey Option 1',
      quantity: 1,
      address: '',
      ageVerified: false,
    },
  });

  const whiskeyOptions = ['Whiskey Option 1', 'Whiskey Option 2', 'Whiskey Option 3'];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto' }}>
      <TextField {...register('firstName')} label="First Name" required variant="outlined" sx={{ marginBottom: 2, width: '50%' }} />
      <TextField {...register('lastName')} label="Last Name" required variant="outlined" sx={{ marginBottom: 2, width: '50%' }} />
      <TextField {...register('email')} label="Email" required variant="outlined" sx={{ marginBottom: 2, width: '50%' }} />
      <TextField {...register('phone')} label="Phone" required variant="outlined" sx={{ marginBottom: 2, width: '50%' }} />

      <FormControl variant="outlined" sx={{ marginBottom: 2, width: '50%' }}>
        <InputLabel id="whiskey-label">Whiskey</InputLabel>
        <Controller
          name="whiskey"
          control={control}
          defaultValue={whiskeyOptions[0]}
          render={({ field }) => (
            <Select labelId="whiskey-label" label="Whiskey" {...field}>
              {whiskeyOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <TextField {...register('quantity')} label="Quantity" required variant="outlined" type="number" sx={{ marginBottom: 2, width: '50%' }} />
      <TextField {...register('address')} label="Address" required multiline rows={4} variant="outlined" sx={{ marginBottom: 2, width: '100%' }} />
      
      <FormControlLabel
        control={<Checkbox {...register('ageVerified')} />}
        label="I verify that I am over 21 years of age"
        sx={{ marginBottom: 2 }}
      />
      
      <Button type="submit" variant="contained" color="primary">Purchase</Button>
    </Box>
  );
}
