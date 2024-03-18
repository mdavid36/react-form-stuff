import { FormikValues } from 'formik';
import { loginInitialValues } from './Login/loginInitialValues';
import { loginSchema } from './Login/loginValidation';
import { registrationInitialValues } from './Register/registrationInitialValues';
import { registrationSchema } from './Register/registrationValidaiton';
import LoginForm from './Login/LoginForm';
import RegistrationForm from './Register/RegistrationForm';

//TODO: maybe we tryout some dynamic imports here.

const useAuthFormParams = (authType: string) => {
  const initialValues = { ...loginInitialValues, ...registrationInitialValues };
  switch (authType) {
    case 'login':
      return {
        initialValues: loginInitialValues,
        schema: loginSchema,
        handleSubmit: (values: FormikValues) =>
          console.log('handleSubmit', values),
        CurrentForm: LoginForm
      };
    case 'register':
      return {
        initialValues: registrationInitialValues,
        schema: registrationSchema,
        handleSubmit: (values: FormikValues) =>
          console.log('handleSubmit', values),
        CurrentForm: RegistrationForm
      };
    default:
      return {
        initialValues: initialValues,
        schema: loginSchema,
        handleSubmit: (values: FormikValues) =>
          console.log('handleSubmit', values),
        CurrentForm: LoginForm
      };
  }
};

export default useAuthFormParams;
