import { Box, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { RegistrationCredentials } from '../types/authTypes';

interface RegistrationFormProps {
  errors: FormikErrors<RegistrationCredentials> | undefined;
  touched: FormikTouched<RegistrationCredentials> | undefined;
}

const RegistrationForm = ({ errors, touched }: RegistrationFormProps) => (
  <Box>
    <TextField
      name="email"
      label="User Name"
      error={touched?.email && Boolean(errors?.email) ? true : false}
      helperText={
        touched?.email && Boolean(errors?.email) ? errors?.email : null
      }
    />
    <TextField
      name="password"
      label="Password"
      error={touched?.password && Boolean(errors?.password) ? true : false}
      helperText={
        touched?.password && Boolean(errors?.password) ? errors?.password : null
      }
    />
    <TextField
      name="verifyPassword"
      label="Confirm Password"
      error={
        touched?.verifyPassword && Boolean(errors?.verifyPassword)
          ? true
          : false
      }
      helperText={
        touched?.verifyPassword && Boolean(errors?.verifyPassword)
          ? errors?.verifyPassword
          : null
      }
    />
  </Box>
);

export default RegistrationForm;
