'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectInput';
import { FormValues, Options } from '@/types';

const whiskeyOptions: Options = [
  { value: 'whiskey1', label: 'Whiskey 1' },
  { value: 'whiskey2', label: 'Whiskey 2' },
  { value: 'whiskey3', label: 'Whiskey 3' }
];

const Page = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '0 auto',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextInput
            name="firstName"
            label="First Name"
            fullWidth
            control={control}
            rules={{ required: 'First Name is required' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            name="lastName"
            label="Last Name"
            fullWidth
            control={control}
            rules={{ required: 'Last Name is required' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            name="email"
            label="Email"
            fullWidth
            control={control}
            rules={{ required: 'Email is required' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            control={control}
            rules={{ required: 'Phone Number is required' }}
          />
        </Grid>
        <Grid item xs={6}>
          <SelectInput
            name="whiskey"
            label="Whiskey"
            control={control}
            options={whiskeyOptions}
            rules={{ required: 'To select a Whiskey is required' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            name="address"
            label="Address"
            fullWidth
            control={control}
            multiline
            rows={4}
            rules={{ required: 'Address is required' }}
          />
        </Grid>
      </Grid>
      <Divider sx={{ my: 1, borderBottomWidth: '2px' }} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default Page;
