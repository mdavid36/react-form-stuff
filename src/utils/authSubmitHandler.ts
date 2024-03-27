/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormikValues } from 'formik';
export const handleLoginSubmit = async (values: FormikValues) => {
  const returnVal = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  return returnVal;
};
export const handleRegistrationSubmit = (values: FormikValues) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
};
export const authSubmitHandler = (submitType: string) => {
  switch (submitType) {
    case 'login':
      return handleLoginSubmit;
    case 'register':
      return handleRegistrationSubmit;
    default:
      return handleLoginSubmit;
  }
};

export default authSubmitHandler;
