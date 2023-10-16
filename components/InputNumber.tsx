import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type InputNumberProps = {
  name: string;
  control: Control;
  rules?: object;
  defaultValue?: number;
  label?: string;
};

const InputNumber = ({
  name,
  control,
  rules,
  defaultValue = 1,
  label,
}: InputNumberProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type="number"
          label={label}
          inputProps={{
            min: 1,
            max: 99,
            step: 1,
          }}
          style={{ width: '100%' }}
        />
      )}
    />
  );
};

export default InputNumber;
