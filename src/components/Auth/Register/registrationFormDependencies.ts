import {
  personalSecurityInitialValues,
  personalSecuritySchema
} from '@/components/subForms/personalSecurity/personalSecurityDependencies';
import {
  personalInfoInitialValues,
  personalInfoSchema
} from '@/components/subForms/personalInfo/personalInfoDependencies';
import { RegistrationCredentials } from '../types/authTypes';
import { object } from 'yup';

export const registrationInitialValues: RegistrationCredentials = {
  personalInfo: { ...personalInfoInitialValues },
  personalSecurity: { ...personalSecurityInitialValues }
};

export const registrationSchema = object({
  personalInfo: personalInfoSchema,
  personalSecurity: personalSecuritySchema
});
