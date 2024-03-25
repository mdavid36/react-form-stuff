import {
  loginInitialValues,
  loginSchema
} from '../components/Auth/Login/loginFormDependencies';
import LoginForm from '../components/Auth/Login/LoginForm';
import currentAuthFormParams from '../utils/getAuthFormParams';
import RegistrationForm from '@/components/Auth/Register/RegistrationForm';
import {
  registrationInitialValues,
  registrationSchema
} from '@/components/Auth/Register/registrationFormDependencies';

const handleSubmit = () => function handleSubmit() {};

jest.mock('../components/Auth/Login/loginFormDependencies', () => ({
  loginInitialValues: 'qwe',
  loginSchema: 'thing'
}));

describe('currentAuthFormParams return', () => {});

test('current Auth Params returns login', () => {
  const expectedReturn = {
    initialValues: loginInitialValues,
    schema: loginSchema,
    handleSubmit: handleSubmit,
    CurrentForm: LoginForm
  };
  expect(JSON.stringify(currentAuthFormParams('login'))).toEqual(
    JSON.stringify(expectedReturn)
  );
});

test('current Auth Params returns registration', () => {
  const expectedReturn = {
    initialValues: registrationInitialValues,
    schema: registrationSchema,
    handleSubmit: handleSubmit,
    CurrentForm: RegistrationForm
  };
  expect(JSON.stringify(currentAuthFormParams('register'))).toEqual(
    JSON.stringify(expectedReturn)
  );
});

test('current Auth Params returns login by default', () => {
  const expectedReturn = {
    initialValues: loginInitialValues,
    schema: loginSchema,
    handleSubmit: handleSubmit,
    CurrentForm: LoginForm
  };
  expect(JSON.stringify(currentAuthFormParams('greg'))).toEqual(
    JSON.stringify(expectedReturn)
  );
});
