import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import FormHelperText from '@mui/material/FormHelperText';

interface AutocompleteInputProps<T> extends Omit<AutocompleteProps<T, false, false, false>, 'renderInput'> {
  name: string;
  control: Control;
  rules?: object;
  defaultValue?: T | null;
  textFieldProps?: TextFieldProps;
  getOptionLabel?: (option: T) => string;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
}

const AutocompleteInput = <T extends object>({
  name,
  control,
  options,
  rules = {},
  defaultValue = null,
  getOptionLabel = (option: T) => JSON.stringify(option),
  isOptionEqualToValue = (option: T, value: T) => JSON.stringify(option) === JSON.stringify(value),
  textFieldProps,
  ...rest
}: AutocompleteInputProps<T>) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue={defaultValue}
    render={({ field, fieldState }) => (
      <Autocomplete
        {...field}
        {...rest}
        options={options}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              {...textFieldProps}
              error={!!fieldState.error}
            />
            {fieldState.error && <FormHelperText error>{fieldState.error.message}</FormHelperText>}
          </>
        )}
        onChange={(_, data) => field.onChange(data)}
        renderOption={(props, option) => (
          <li {...props} key={getOptionLabel(option)}>
            {getOptionLabel(option)}
          </li>
        )}
        renderTags={(tagValue, getTagProps) => (
          tagValue.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={getOptionLabel(option)}
              label={getOptionLabel(option)}
            />
          ))
        )}
      />
    )}
  />
  );

export default AutocompleteInput;
