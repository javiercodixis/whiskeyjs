import * as React from 'react';
import { Controller, Control } from 'react-hook-form';
import { LocalizationProvider, DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

type DateInputProps = Omit<DatePickerProps<dayjs.Dayjs>, 'value' | 'onChange'> & {
  name: string;
  control: Control;
  label?: string;
  rules?: object;
  defaultValue?: string | null;
};

const DateInput = ({
  name,
  control,
  label,
  rules = {},
  defaultValue = null,
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
          value={field.value}
          onChange={(date) => {
            const formattedDate = date?.isValid() ? date.format('YYYY-MM-DD') : null;
            field.onChange(formattedDate);
          }}
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
