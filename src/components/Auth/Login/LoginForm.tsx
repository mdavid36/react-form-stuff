import { Box, Button, TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { LoginCredentials } from './loginValidation';

const LoginForm = () => {
  const { handleSubmit, errors, touched } =
    useFormikContext<LoginCredentials>();
  return (
    <Box>
      <TextField
        name="userName"
        label="User Name"
        error={touched.userName && Boolean(errors.userName) ? true : false}
        helperText={
          touched.userName && Boolean(errors.userName) ? errors.userName : null
        }
      />
      <TextField
        name="password"
        label="Password"
        error={touched.password && Boolean(errors.password) ? true : false}
        helperText={
          touched.password && Boolean(errors.password) ? errors.password : null
        }
      />
      <Button onClick={() => handleSubmit()}>Submit</Button>
    </Box>
  );
};

export default LoginForm;
