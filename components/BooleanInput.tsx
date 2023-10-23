import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

type BooleanInputProps = Omit<CheckboxProps, 'defaultValue'> & Pick<FormControlLabelProps, 'label'> & {
  name: string;
  control: Control;
  rules?: object;
  defaultValue?: boolean;
};

const BooleanInput = ({
  name,
  control,
  rules = {},
  label,
  defaultValue,
  ...rest
}: BooleanInputProps) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field, fieldState }) => (
      <>
        <FormControlLabel
          label={label}
          control={(
            <Checkbox
              {...field}
              checked={field.value}
              color="primary"
              {...rest}
            />
          )}
        />
        {fieldState.error && (
          <FormHelperText error>
            {fieldState.error.message}
          </FormHelperText>
        )}
      </>
    )}
  />
);

export default BooleanInput;
