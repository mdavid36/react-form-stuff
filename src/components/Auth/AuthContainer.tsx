import { Box, Button, Container, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useMemo, useState } from 'react';
import AuthTypeRadioGroup from './AuthTypeRadioGroup';
import getAuthFormParams from '../../utils/getAuthFormParams';

const AuthContainer = (): JSX.Element => {
  const [authType, setAuthType] = useState<string>('');
  const { initialValues, schema, handleSubmit, CurrentForm } = useMemo(
    () => getAuthFormParams(authType),
    [authType]
  );

  return (
    <Container sx={{ paddingTop: '30px', background: '#fff' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        enableReinitialize
      >
        {({ errors, touched, handleSubmit, handleChange }) => (
          <>
            <AuthTypeRadioGroup setAuthType={setAuthType} />
            <Form onSubmit={handleSubmit} onChange={handleChange}>
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
