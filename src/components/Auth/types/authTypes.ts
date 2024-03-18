import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { InferType } from 'yup';
import { registrationSchema } from '../Register/registrationValidaiton';
import { loginSchema } from '../Login/loginValidation';

export interface AuthTypeRadioGroupProps {
  handleReset: (e?: SyntheticEvent<never, Event> | undefined) => void;
  setAuthType: Dispatch<SetStateAction<string>>;
}

export type RegistrationCredentials = InferType<typeof registrationSchema>;
export type LoginCredentials = InferType<typeof loginSchema>;
