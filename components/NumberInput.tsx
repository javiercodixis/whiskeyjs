import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type NumberInputProps = TextFieldProps & {
  name: string;
  control: Control;
  rules?: object;
};

const NumberInput = ({
  name,
  control,
  defaultValue,
  rules,
  ...rest
}: NumberInputProps) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        {...field}
        type="number"
        fullWidth
        error={!!fieldState.error}
        helperText={fieldState.error ? fieldState.error.message : null}
        {...rest}
      />
    )}
  />
);

export default NumberInput;
