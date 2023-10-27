'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import BooleanInput from '@/components/BooleanInput';
import DateInput from '@/components/DateInput';
import NumberInput from '@/components/NumberInput';
import SelectInput from '@/components/SelectInput';
import TextInput from '@/components/TextInput';
import { City, Cities, Options } from '@/types';
import AutocompleteInput from '@/components/AutocompleteInput';
import FileInput from '@/components/FileInput';

const whiskeyOptions: Options = [
  { value: 'whiskey1', label: 'Whiskey 1' },
  { value: 'whiskey2', label: 'Whiskey 2' },
  { value: 'whiskey3', label: 'Whiskey 3' },
];

const citiesOptions: Cities = [
  { id: '1', name: 'Malaga', country: 'Spain' },
  { id: '2', name: 'Sofia', country: 'Bulgaria' },
  { id: '3', name: 'Madrid', country: 'Spain' },
];

const acceptedMimeTypes = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'application/pdf': ['.pdf'],
};

const Page = () => {
  const { handleSubmit, control, watch } = useForm();

  const isCheckboxChecked = watch('ageVerification', false);

  const noLeadingZeros = (value: string): boolean | string => !/^0[0-9]+/.test(value) || 'Invalid number format';

  const isPositive = (value: string): boolean | string => parseFloat(value) > 0 || 'Value must be positive';

  const noDecimals = (value: string): boolean | string => Number.isInteger(parseFloat(value)) || 'No decimals allowed';

  const minimumQuantity = (value: number): boolean | string => value >= 3 || 'Minimum quantity is 3';

  const validateEmail = (value: string): boolean | string => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return pattern.test(value) || 'Invalid email address';
  };

  const validatePhoneNumber = (value: string): boolean | string => {
    const pattern = /^\d+$/;

    return pattern.test(value) || 'Phone number should only contain digits';
  };

  const onSubmit = (data: any): void => { // eslint-disable-line
    console.log(data); // eslint-disable-line no-console
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
            rules={{
              required: 'Email is required',
              validate: validateEmail,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            control={control}
            rules={{
              required: 'Phone Number is required',
              validate: validatePhoneNumber,
            }}
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
        <Grid item xs={6}>
          <NumberInput
            name="whiskeyQuantity"
            label="Whiskey Quantity"
            control={control}
            defaultValue={1}
            rules={{
              validate: {
                noLeadingZeros,
                isPositive,
                noDecimals,
                minimumQuantity,
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <BooleanInput
            name="ageVerification"
            label="I am over 18 years old"
            control={control}
            defaultValue={false}
            rules={{ required: 'You must verify your age to proceed' }}
          />
        </Grid>
        {isCheckboxChecked && (
          <>
            <Grid item xs={6}>
              <DateInput
                name="deliveryDate"
                control={control}
                label="Date of Delivery"
                rules={{ required: 'A delivery date is required' }}
              />
            </Grid>
            <Grid item xs={6}>
              <AutocompleteInput<City>
                name="autocompleteField"
                control={control}
                options={citiesOptions}
                getOptionLabel={(option) => `${option.name} - ${option.country}`} // we dont need, it should be inside the component
                isOptionEqualToValue={(option, value) => option.id === value.id}
                rules={{ required: 'To select a City is required' }}
              />
            </Grid>
            <Grid item xs={12}>
              <FileInput
                control={control}
                name="paymentConfirmation"
                accept={acceptedMimeTypes}
                maxSize={5242880}
                minSize={1024}
                multiple={false}
                instructions="Drag &apos;n&apos; drop some file here, or click to select file"
                selectedFileMessage="Selected file:"
                rules={{ required: 'To select a File is required' }}
              />
            </Grid>
          </>
        )}
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
};

export default Page;
