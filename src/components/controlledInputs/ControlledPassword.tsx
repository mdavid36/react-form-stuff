import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps
} from '@mui/material';
import React from 'react';
import { Controller, Control, Path } from 'react-hook-form';

type MyProps<T extends Record<string, unknown>> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  // textFieldProps?: TextFieldProps;
};

const ControlledPassword = <T extends Record<string, unknown>>({
  name,
  control,
  label,
  ...fieldProps
}: MyProps<T> & TextFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...fieldProps}
          label={label}
          type={showPassword ? 'text' : 'password'}
          error={Boolean(error)}
          helperText={error ? error.message : null}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      )}
    />
  );
};

export default ControlledPassword;
