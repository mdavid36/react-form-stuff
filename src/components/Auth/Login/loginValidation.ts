import { object, string } from 'yup';

export const loginSchema = object({
  userName: string().required(),
  password: string()
    .required()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
