import { object, string, ref, InferType } from 'yup';

export const loginSchema = object({
  userName: string().required(),
  password: string()
    .required()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  verifyPassword: string().oneOf(
    [ref('password')],
    'Must match "password" field value'
  )
});

export type LoginCredentials = InferType<typeof loginSchema>;
