import { ObjectSchema, object, string } from 'yup';

export type LoginInfo = {
  userName: string;
  password: string;
};

export const loginInfoSchema: ObjectSchema<LoginInfo> = object({
  userName: string().required(),
  password: string()
    .required()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
export const loginInfoInitialValues: LoginInfo = {
  userName: '',
  password: ''
};
