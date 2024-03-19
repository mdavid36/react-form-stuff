import { Box } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { RegistrationCredentials } from '../types/authTypes';
import PersonalInfoSubForm from '@/components/subForms/personalInfo/PersonalInfoSubForm';
import PersonalSecuritySubForm from '@/components/subForms/personalSecurity/PersonalSecuritySubForm';

export interface RegistrationFormProps {
  errors: FormikErrors<RegistrationCredentials> | undefined;
  touched: FormikTouched<RegistrationCredentials> | undefined;
}

const RegistrationForm = ({ errors, touched }: RegistrationFormProps) => (
  <Box>
    <PersonalInfoSubForm
      errors={errors?.personalInfo}
      touched={touched?.personalInfo}
    />
    <PersonalSecuritySubForm
      errors={errors?.personalSecurity}
      touched={touched?.personalSecurity}
    />
  </Box>
);

export default RegistrationForm;
