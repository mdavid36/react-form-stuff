import { Box, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { LoginCredentials } from '../types/authTypes';

interface LoginFormProps {
  errors: FormikErrors<LoginCredentials> | undefined;
  touched: FormikTouched<LoginCredentials> | undefined;
}

const LoginForm = ({ errors, touched }: LoginFormProps) => {
  return (
    <Box>
      <TextField
        name="userName"
        label="User Name"
        error={touched?.userName && Boolean(errors?.userName) ? true : false}
        helperText={
          touched?.userName && Boolean(errors?.userName)
            ? errors?.userName
            : null
        }
      />
      <TextField
        name="password"
        label="Password"
        error={touched?.password && Boolean(errors?.password) ? true : false}
        helperText={
          touched?.password && Boolean(errors?.password)
            ? errors?.password
            : null
        }
      />
    </Box>
  );
};

export default LoginForm;
