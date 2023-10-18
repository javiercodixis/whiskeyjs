import React from 'react';
import { Control, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DateInputProps = {
  name: string;
  control: Control;
  label: string;
};

const DateInput: React.FC<DateInputProps> = ({ name, control, label }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <DatePicker
        selected={field.value}
        onChange={(date) => field.onChange(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText={label}
        className="some-custom-class-for-css"
      />
    )}
  />
);

export default DateInput;
