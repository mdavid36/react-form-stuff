import { object, ref, string } from 'yup';

export type PersonalSecurity = {
  password: string;
  verifyPassword: string;
};

export const personalSecuritySchema = object({
  password: string()
    .required()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  verifyPassword: string()
    .oneOf([ref('password')], 'Must match "password" field value')
    .required()
});

export const personalSecurityInitialValues: PersonalSecurity = {
  password: '',
  verifyPassword: ''
};
