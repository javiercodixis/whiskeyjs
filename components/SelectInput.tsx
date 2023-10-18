import React from 'react';
import { Controller, Control } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import { Options } from '@/types';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

type SelectInputProps = SelectProps & {
  name: string;
  control: Control;
  options: Options;
  rules?: object;
};

const SelectInput = ({
  name,
  control,
  label,
  options,
  rules,
  ...rest
}: SelectInputProps) => (

  <Controller
    name={name}
    control={control}
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
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {fieldState.error
          && <FormHelperText>{fieldState.error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);

export default SelectInput;
