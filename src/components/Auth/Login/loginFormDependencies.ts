import loginInfoSchema from '@/utils/validation/yupValidation/yupLoginValidation';
import {
  LoginInfo,
  loginInfoInitialValues
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
