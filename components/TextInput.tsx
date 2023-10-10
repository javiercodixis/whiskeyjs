import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormValues } from '@/types';

interface InputProps extends React.ComponentProps<typeof TextField> {
  name: keyof FormValues;
  fullWidth: boolean;
  label: string;
  control: Control<FormValues>;
  rules?: object;
}

const TextInput = ({ name, label, control, rules, fullWidth, ...rest }: InputProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ ...rules, required: `${label} is required` }}
    render={({ field, fieldState }) => (
      <Box>
        <TextField
          {...field}
          {...rest}
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
