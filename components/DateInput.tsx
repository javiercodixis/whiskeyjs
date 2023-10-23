import * as React from 'react';
import { Controller, Control } from 'react-hook-form';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type DateInputProps = {
  name: string;
  control: Control;
  label?: string;
  rules?: object;
  defaultValue?: string;
};

const DateInput = ({
  name,
  control,
  label,
  rules = {},
  defaultValue = '',
  ...rest
}: DateInputProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <DatePicker
          label={label}
          value={field.value || defaultValue}
          onChange={(date) => field.onChange(date?.isValid() ? date.format('YYYY-MM-DD') : defaultValue)}
          slotProps={{
            textField: {
              helperText: fieldState.error ? fieldState.error.message : null,
              error: !!fieldState.error,
            },
          }}
          {...rest}
        />
      )}
    />
  </LocalizationProvider>
);

export default DateInput;
