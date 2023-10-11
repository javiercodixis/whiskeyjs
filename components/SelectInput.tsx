import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormValues } from '@/types';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

type SelectInputProps = {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  options: string[];
  rules?: object;
};

function SelectInput(props: SelectInputProps) {
  const {
    name,
    control,
    label,
    options,
    rules
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth error={!!fieldState.error}>
          <InputLabel shrink>{label}</InputLabel>
          <Select
            {...field}
            displayEmpty
            value={field.value || ''}
            renderValue={
              selected => selected || <em>Choose a whiskey</em>
            }
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && <p>{fieldState.error.message}</p>}
        </FormControl>
      )}
    />
  );
}

export default SelectInput;
