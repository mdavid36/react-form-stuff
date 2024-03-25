import { FormikValues } from 'formik';

export const authSubmitHandler = (submitType: string) => {
  switch (submitType) {
    case 'login':
      return (values: FormikValues) => {
        console.log('loginSubmit', values);
      };
    case 'register':
      return (values: FormikValues) => {
        console.log('registerSubmit', values);
      };
    default:
      return (values: FormikValues) => {
        console.log('default', values);
      };
  }
};
