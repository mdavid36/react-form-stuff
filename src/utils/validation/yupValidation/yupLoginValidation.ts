import { LoginInfo } from '@/components/subForms/loginInfo/loginInfoDependencies';
import { ObjectSchema, object, string } from 'yup';

const loginInfoSchema: ObjectSchema<LoginInfo> = object({
  userName: string().required(),
  password: string()
    .required()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export default loginInfoSchema;
