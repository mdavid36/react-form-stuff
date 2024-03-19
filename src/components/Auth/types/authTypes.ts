import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { InferType } from 'yup';
import { loginSchema } from '../Login/loginValidation';
import { PersonalInfo } from '@/components/subForms/personalInfo/personalInfoDependencies';
import { PersonalSecurity } from '@/components/subForms/personalSecurity/personalSecurityDependencies';

export interface AuthTypeRadioGroupProps {
  handleReset: (e?: SyntheticEvent<never, Event> | undefined) => void;
  setAuthType: Dispatch<SetStateAction<string>>;
}

export type RegistrationCredentials = {
  personalInfo: PersonalInfo;
  personalSecurity: PersonalSecurity;
};
export type LoginCredentials = InferType<typeof loginSchema>;
