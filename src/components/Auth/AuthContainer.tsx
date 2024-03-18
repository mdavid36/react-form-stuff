import { Box, Button, Container, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import AuthTypeRadioGroup from './AuthTypeRadioGroup';
import useAuthFormParams from './useAuthFormParams';

const AuthContainer = (): JSX.Element => {
  const [authType, setAuthType] = useState<string>('');
  const { initialValues, schema, handleSubmit, CurrentForm } =
    useAuthFormParams(authType);

  return (
    <Container sx={{ paddingTop: '30px', background: '#fff' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched, handleSubmit, handleReset }) => (
          <>
            <AuthTypeRadioGroup
              setAuthType={setAuthType}
              handleReset={handleReset}
            />
            <Form onSubmit={handleSubmit}>
              <CurrentForm errors={errors} touched={touched} />
              <Button type="submit" variant="outlined">
                Submit
              </Button>
            </Form>
          </>
        )}
      </Formik>
      <Box>
        <Typography>Did we forget our password?</Typography>
      </Box>
    </Container>
  );
};

export default AuthContainer;
