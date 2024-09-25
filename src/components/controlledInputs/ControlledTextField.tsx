import { TextField, TextFieldProps } from '@mui/material';
import { Controller, Control, Path } from 'react-hook-form';

type MyProps<T extends Record<string, unknown>> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  // textFieldProps?: TextFieldProps;
};

const ControlledTextField = <T extends Record<string, unknown>>({
  name,
  control,
  label,
  ...fieldProps
}: MyProps<T> & TextFieldProps): JSX.Element => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...fieldProps}
          label={label}
          error={Boolean(error)}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default ControlledTextField;
