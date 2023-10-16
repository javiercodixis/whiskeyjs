import React from 'react';
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
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
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
            onClick={() => {
              let newValue = Number(field.value) - 1;
              if (newValue < 1) newValue = 1;
              field.onChange(newValue);
            }}
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
            {...field}
            type="number"
            variant="outlined"
            sx={{
              margin: '0 10px',
              width: '4rem',
            }}
            inputProps={{ 
              min: 1, 
              max: 99, 
              step: 1 
            }}
            value={typeof field.value === 'number' ? field.value : ''}
            onChange={(e) => {
              const newValue = parseInt(e.target.value, 10);
              field.onChange(newValue);
            }}
          />

          <Button
            onClick={() => {
              let newValue = Number(field.value) + 1;
              if (newValue > 99) newValue = 99;
              field.onChange(newValue);
            }}
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
      )}
    />
  );
};

export default InputNumber;
