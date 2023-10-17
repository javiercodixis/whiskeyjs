import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type NumberInputProps = TextFieldProps & {
  name: string;
  control: Control;
  rules?: object;
  errorMessage?: string;
  allowDecimals?: boolean;
};

const NumberInput = ({
  name,
  control,
  rules,
  defaultValue,
  errorMessage = "Please select a valid quantity",
  allowDecimals = false,
  ...rest
}: NumberInputProps) => {

  const validate = (value: any) => {
    const stringValue = value?.toString() || "";
    const numericValue = parseFloat(stringValue);

    if (isNaN(numericValue) || numericValue <= 0 || (!allowDecimals && !Number.isInteger(numericValue))) {
      return errorMessage;
    }

    return true;
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ ...rules, validate }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          type="number"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : null}
          onChange={(e) => {
            let adjustedValue = e.target.value;
            
            if (!allowDecimals) {
              adjustedValue = adjustedValue.replace(/[.,]/g, '');
            }

            adjustedValue = adjustedValue.replace(/^0+(?![.]|$)/, '');
            
            field.onChange(adjustedValue);
          }}          
          {...rest}
        />
      )}
    />
  );
};

export default NumberInput;
