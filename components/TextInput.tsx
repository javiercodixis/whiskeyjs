import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FormValues } from '@/types';

type InputProps = TextFieldProps & {
  name: keyof FormValues;
  control: Control<FormValues>;
  rules?: object;
}

const TextInput = ({ name, label, control, rules, fullWidth }: InputProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <Box>
        <TextField
          {...field}
          fullWidth={fullWidth}
          label={label} 
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : null}
        />
      </Box>
    )}
  />
);

export default TextInput;
