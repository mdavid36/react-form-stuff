import { Box, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { LoginInfo } from './loginInfoDependencies';

export interface LoginSubFormProps {
  errors: FormikErrors<LoginInfo> | undefined;
  touched: FormikTouched<LoginInfo> | undefined;
}

const LoginInfoSubForm = ({ errors, touched }: LoginSubFormProps) => (
  <Box>
    <TextField
      name="loginInfo.userName"
      label="User Name"
      error={touched?.userName && Boolean(errors?.userName) ? true : false}
      helperText={
        touched?.userName && Boolean(errors?.userName) ? errors?.userName : null
      }
    />
    <TextField
      name="loginInfo.password"
      label="Password"
      error={touched?.password && Boolean(errors?.password) ? true : false}
      helperText={
        touched?.password && Boolean(errors?.password) ? errors?.password : null
      }
    />
  </Box>
);

export default LoginInfoSubForm;
