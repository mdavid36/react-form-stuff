import {
  LoginInfo,
  loginInfoInitialValues,
  loginInfoSchema
} from '../../../components/subForms/loginInfo/loginInfoDependencies';
import { ObjectSchema, object } from 'yup';

export type LoginCredentials = {
  loginInfo: LoginInfo;
};
export const loginInitialValues: LoginCredentials = {
  loginInfo: { ...loginInfoInitialValues }
};

export const loginSchema: ObjectSchema<LoginCredentials> = object({
  loginInfo: loginInfoSchema
});
