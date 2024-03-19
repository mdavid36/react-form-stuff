import { Box, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { PersonalSecurity } from './personalSecurityDependencies';

interface PersonalSecuritySubFormProps {
  errors: FormikErrors<PersonalSecurity> | undefined;
  touched: FormikTouched<PersonalSecurity> | undefined;
}

const PersonalSecuritySubForm = ({
  errors,
  touched
}: PersonalSecuritySubFormProps) => (
  <Box>
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

export default PersonalSecuritySubForm;
