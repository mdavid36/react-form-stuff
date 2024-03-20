import { Dispatch, SetStateAction } from 'react';
import { InferType } from 'yup';
import { loginSchema } from '../Login/loginValidation';
import { PersonalInfo } from '@/components/subForms/personalInfo/personalInfoDependencies';
import { PersonalSecurity } from '@/components/subForms/personalSecurity/personalSecurityDependencies';

export interface AuthTypeRadioGroupProps {
  setAuthType: Dispatch<SetStateAction<string>>;
}

export type RegistrationCredentials = {
  personalInfo: PersonalInfo;
  personalSecurity: PersonalSecurity;
};
export type LoginCredentials = InferType<typeof loginSchema>;
