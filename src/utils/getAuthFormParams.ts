import {
  loginInitialValues,
  loginSchema
} from '../components/Auth/Login/loginFormDependencies';
import {
  registrationInitialValues,
  registrationSchema
} from '../components/Auth/Register/registrationFormDependencies';
import LoginForm from '../components/Auth/Login/LoginForm';
import RegistrationForm from '../components/Auth/Register/RegistrationForm';
import { authSubmitHandler } from './authSubmitHandler';

//TODO: maybe we tryout some dynamic imports here.

const getAuthFormParams = (authType: string) => {
  const submitHandler = authSubmitHandler(authType);
  switch (authType) {
    case 'login':
      return {
        initialValues: loginInitialValues,
        schema: loginSchema,
        handleSubmit: submitHandler,
        CurrentForm: LoginForm
      };
    case 'register':
      return {
        initialValues: registrationInitialValues,
        schema: registrationSchema,
        handleSubmit: submitHandler,
        CurrentForm: RegistrationForm
      };
    default:
      return {
        initialValues: loginInitialValues,
        schema: loginSchema,
        handleSubmit: submitHandler,
        CurrentForm: LoginForm
      };
  }
};

export default getAuthFormParams;
