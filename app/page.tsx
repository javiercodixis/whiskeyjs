'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputText from '@/components/TextInput';
import { FormValues } from '@/types';

const Page = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: ''
    }
  });
  
  const onSubmit = (data: FormValues) => {
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
        margin: '0 auto'
      }}
    >
      <InputText
        fullWidth
        name="firstName"
        label="First Name"
        control={control}
        rules={{ required: 'First Name is required' }}
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <InputText
        fullWidth
        name="lastName"
        label="Last Name"
        control={control}
        rules={{ required: 'Last Name is required' }}
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <InputText
        fullWidth
        name="address"
        label="Address"
        control={control}
        multiline
        rows={4}
        rules={{ required: 'Address is required' }}
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <InputText
        fullWidth
        name="phoneNumber"
        label="Phone Number"
        control={control}
        rules={{ required: 'Phone Number is required' }}
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Box>
  );
}

export default Page;
