import { Controller, Control } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

type InputProps = {
  name: string;
  label: string;
  control: Control<any>;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
};

const InputText = ({ name, label, control, multiline, rows, required }: InputProps) => {
  return (
    <Controller
      name={name as any}
      control={control}
      rules={{ required: `${label} is required`, validate: value => value.trim() !== '' || `${label} should not be empty` }}
      render={({ field, fieldState }) => (
        <>
          <TextField
            {...field}
            label={label}
            multiline={multiline || false}
            rows={rows || 1}
            variant="outlined"
            fullWidth
            required={required}
            error={fieldState.invalid}
          />
          <FormHelperText error={fieldState.invalid}>{fieldState.error?.message}</FormHelperText>
        </>
      )}
    />
  );
};

export default InputText;
