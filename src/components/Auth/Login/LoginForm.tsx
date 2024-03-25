import { FormikErrors, FormikTouched } from 'formik';
import LoginInfoSubForm from '@/components/subForms/loginInfo/LoginInfoSubForm';
import { LoginCredentials } from './loginFormDependencies';

export interface LoginFormProps {
  errors: FormikErrors<LoginCredentials> | undefined;
  touched: FormikTouched<LoginCredentials> | undefined;
}

const LoginForm = ({ errors, touched }: LoginFormProps) => (
  <LoginInfoSubForm errors={errors?.loginInfo} touched={touched?.loginInfo} />
);

export default LoginForm;
