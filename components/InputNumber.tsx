import React, { useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
  ...rest
}: InputNumberProps) => {
  const [value, setValue] = useState<number | string>(defaultValue || 1);

  const handleIncrement = (onChange: (value: number | string) => void) => {
    let newValue = Number(value) + 1;
    if (newValue > 99) newValue = 99;
    setValue(newValue);
    onChange(newValue);
  };
    
  const handleDecrement = (onChange: (value: number | string) => void) => {
    let newValue = Number(value) - 1;
    if (newValue < 1) newValue = 1;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontWeight: 400,
            }}
          >
            <Button
              onClick={() => handleDecrement(field.onChange)}
              sx={{
                borderRadius: '999px',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#66b2ff' : '#0072e5',
                '&:hover': {
                  background: (theme) =>
                    theme.palette.mode === 'dark' ? '#004c99' : '#daecff',
                },
              }}
            >
              <RemoveIcon />
            </Button>
            <TextField
              value={field.value}
              onChange={(e) => {
                setValue(e.target.value);
                field.onChange(e);
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                margin: '0 10px',
                width: '4rem',
              }}
            />
            <Button
              onClick={() => handleIncrement(field.onChange)}
              sx={{
                borderRadius: '999px',
                color: (theme) =>
                  theme.palette.mode === 'dark' ? '#66b2ff' : '#0072e5',
                '&:hover': {
                  background: (theme) =>
                    theme.palette.mode === 'dark' ? '#004c99' : '#daecff',
                },
              }}
            >
              <AddIcon />
            </Button>
          </Box>
        </Box>
      )}
    />
  );
};

export default InputNumber;
