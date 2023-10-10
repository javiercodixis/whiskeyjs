import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FormValues } from '@/types';

type TextInputProps = TextFieldProps &  {
  name: keyof FormValues;
  label: string;
  control: Control<FormValues>;
  rules?: object;
  fullWidth?: boolean;
  halfWidth?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ name, label, control, rules, fullWidth, halfWidth }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth={fullWidth || !halfWidth}
          label={label} 
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : null}
        />
      )}
    />
  );
};

export default TextInput;
