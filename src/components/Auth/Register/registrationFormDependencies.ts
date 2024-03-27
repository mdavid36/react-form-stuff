import {
  PersonalSecurity,
  personalSecurityInitialValues,
  personalSecuritySchema
} from '../../../components/subForms/personalSecurity/personalSecurityDependencies';
import {
  PersonalInfo,
  personalInfoInitialValues,
  personalInfoSchema
} from '../../../components/subForms/personalInfo/personalInfoDependencies';
import { object } from 'yup';

export type RegistrationCredentials = {
  personalInfo: PersonalInfo;
  personalSecurity: PersonalSecurity;
};

export const registrationInitialValues: RegistrationCredentials = {
  personalInfo: { ...personalInfoInitialValues },
  personalSecurity: { ...personalSecurityInitialValues }
};

export const registrationSchema = object({
  personalInfo: personalInfoSchema,
  personalSecurity: personalSecuritySchema
});
