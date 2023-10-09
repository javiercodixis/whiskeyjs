'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputText from '@/components/InputText';

type FormValues = {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
};

export default function Page() {
  const { handleSubmit, control } = useForm<FormValues>();

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
        name="firstName"
        label="First Name"
        control={control}
        required
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <InputText
        name="lastName"
        label="Last Name"
        control={control}
        required
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <InputText
        name="address"
        label="Address"
        control={control}
        multiline
        rows={4}
        required
      />
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: '2px',
        }}
      />
      <InputText
        name="phoneNumber"
        label="Phone Number"
        control={control}
        required
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
