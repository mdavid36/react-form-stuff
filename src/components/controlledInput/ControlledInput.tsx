import { TextField } from '@mui/material';
import React from 'react';
import { Controller, Control, Path } from 'react-hook-form';

type MyProps<T extends Record<string, unknown>> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
};

const ControlledInput = <T extends Record<string, unknown>>({
  name,
  control,
  label
}: MyProps<T>): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          error={Boolean(error)}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default ControlledInput;
