import React from 'react';
import { Controller, Control } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import { FormValues } from '@/types';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

type SelectInputProps = SelectProps & {
  name: keyof FormValues;
  control: Control<FormValues>;
  defaultValue?: string;
  label: string;
  options: string[];
  rules?: object;
  placeholder?: string;
};

function SelectInput({
  name,
  control,
  label,
  options,
  rules,
  defaultValue,
  ...rest
}: SelectInputProps) {

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={fieldState.invalid}>
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select 
            {...field}
            displayEmpty
            labelId={`${name}-label`}
            id={`${name}-select`}
            label={label}
            value={field.value ?? ''}
            {...rest}
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && 
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          }
        </FormControl>
      )}
    />
  );
}

export default SelectInput;
