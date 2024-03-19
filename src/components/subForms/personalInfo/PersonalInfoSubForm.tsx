import { Box, TextField } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';
import { PersonalInfo } from './personalInfoDependencies';

interface PersonalInfoSubFormProps {
  errors: FormikErrors<PersonalInfo> | undefined;
  touched: FormikTouched<PersonalInfo> | undefined;
}

const PersonalInfoSubForm = ({ errors, touched }: PersonalInfoSubFormProps) => (
  <Box>
    <TextField
      name="firstName"
      label="First Name"
      error={touched?.firstName && Boolean(errors?.firstName) ? true : false}
      helperText={
        touched?.firstName && Boolean(errors?.firstName)
          ? errors?.firstName
          : null
      }
    />
    <TextField
      name="lastName"
      label="Last Name"
      error={touched?.lastName && Boolean(errors?.lastName) ? true : false}
      helperText={
        touched?.lastName && Boolean(errors?.lastName) ? errors?.lastName : null
      }
    />
    <TextField
      name="email"
      label="Email"
      error={touched?.email && Boolean(errors?.email) ? true : false}
      helperText={
        touched?.email && Boolean(errors?.email) ? errors?.email : null
      }
    />
    <TextField
      name="dob"
      label="Date of Birth"
      error={touched?.dob && Boolean(errors?.dob) ? true : false}
      helperText={touched?.dob && Boolean(errors?.dob) ? errors?.dob : null}
    />
    <TextField
      name="address"
      label="Address"
      error={touched?.address && Boolean(errors?.address) ? true : false}
      helperText={
        touched?.address && Boolean(errors?.address) ? errors?.address : null
      }
    />
  </Box>
);

export default PersonalInfoSubForm;
