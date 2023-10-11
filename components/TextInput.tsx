import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FormValues } from '@/types';

type TextInputProps = TextFieldProps & {
  name: keyof FormValues;
  control: Control<FormValues>;
  rules?: object;
};

const TextInput = ({
  name,
  control,
  rules,
  ...rest
}: TextInputProps) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        {...field}
        value={field.value ?? ''}
        error={!!fieldState.error}
        helperText={fieldState.error ? fieldState.error.message : null}
        onChange={(e) => {
          const value = e.target.value;
          field.onChange(value === '' ? null : (value || 0));
        }}
        {...rest}
      />
    )}
  />
);

export default TextInput;
