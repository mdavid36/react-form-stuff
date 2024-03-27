import { object, string } from 'yup';

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  address: string;
};
export const personalInfoSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  address: string().required(),
  dob: string().required(),
  email: string().email().required()
});

export const personalInfoInitialValues: PersonalInfo = {
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  address: ''
};
