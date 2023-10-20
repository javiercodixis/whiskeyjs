import * as React from 'react';
import {
  Controller,
  Control,
  useFormState,
  FieldError,
} from 'react-hook-form';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type DateInputProps = {
  name: string;
  control: Control;
  label?: string;  // eslint-disable-line
  rules?: object;  // eslint-disable-line
};

const DateInput = ({
  name,
  control,
  label,
  rules,
  ...rest
}: DateInputProps) => {
  const { isSubmitted } = useFormState({ control });

  const errorMessages: { [key: string]: string } = {
    invalidDate: 'Your date is not valid',
  };

  const getErrorMessage = (fieldValue: string, fieldError: FieldError | undefined) => {
    if (isSubmitted && !fieldValue) {
      return 'A date must be selected';
    }

    return fieldError ? errorMessages[fieldError.type] ?? '' : '';
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          const errorMessage = getErrorMessage(field.value, fieldState.error);

          return (
            <DatePicker
              label={label}
              value={field.value}
              onChange={(date) => {
                if (date && date.isValid()) {
                  field.onChange(date.format('YYYY-MM-DD'));
                } else {
                  field.onChange(null);
                }
              }}
              onError={(errorType) => {
                if (errorType) {
                  fieldState.error = {
                    type: errorType,
                    message: errorMessage,
                  };
                } else {
                  fieldState.error = undefined;
                }
              }}
              slotProps={{
                textField: {
                  helperText: errorMessage,
                  error: !!errorMessage,
                },
              }}
              {...rest}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
