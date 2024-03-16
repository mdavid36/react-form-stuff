'use client';
import { Box, Container, Typography } from '@mui/material';
import { Formik } from 'formik';
import { loginInitialValues } from './loginInitialValues';
import LoginForm from './LoginForm';
import { loginSchema } from './loginValidation';

const LoginContainer = () => {
  return (
    <Container sx={{ paddingTop: '30px', background: '#fff' }}>
      <Formik
        initialValues={loginInitialValues}
        onSubmit={(values) => console.log('values', values)}
        validationSchema={loginSchema}
      >
        <LoginForm />
      </Formik>
      <Box>
        <Typography>Do we need to login</Typography>
      </Box>
    </Container>
  );
};

export default LoginContainer;
