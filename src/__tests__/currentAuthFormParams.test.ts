import {
  loginInitialValues,
  loginSchema
} from '@/components/Auth/Login/loginFormDependencies';
import LoginForm from '@/components/Auth/Login/LoginForm';
import getAuthFormParams from '@/utils/getAuthFormParams';
import RegistrationForm from '@/components/Auth/Register/RegistrationForm';
import {
  registrationInitialValues,
  registrationSchema
} from '@/components/Auth/Register/registrationFormDependencies';
import authSubmitHandler from '@/utils/authSubmitHandler';

jest.mock('../utils/authSubmitHandler');

describe('getAuthFormParams function', () => {
  const mockHandleSubmit = jest.fn();
  const mockAuthSubmitHandler = jest.mocked(authSubmitHandler);
  beforeAll(() => {
    mockAuthSubmitHandler.mockReturnValue(mockHandleSubmit);
  });

  test('returns login form params when called with login', () => {
    const expectedReturn = {
      initialValues: loginInitialValues,
      schema: loginSchema,
      handleSubmit: mockHandleSubmit,
      CurrentForm: LoginForm
    };
    expect(getAuthFormParams('login')).toEqual(expectedReturn);
  });

  test('returns registration form params when called with register', () => {
    const expectedReturn = {
      initialValues: registrationInitialValues,
      schema: registrationSchema,
      handleSubmit: mockHandleSubmit,
      CurrentForm: RegistrationForm
    };
    expect(getAuthFormParams('register')).toEqual(expectedReturn);
  });

  test('returns login form params by default', () => {
    const expectedReturn = {
      initialValues: loginInitialValues,
      schema: loginSchema,
      handleSubmit: mockHandleSubmit,
      CurrentForm: LoginForm
    };
    expect(getAuthFormParams('greg')).toEqual(expectedReturn);
  });
});
