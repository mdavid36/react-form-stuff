export type LoginSubmitValues = {
  userName: string;
  password: string;
};

export interface LoginFormValues extends LoginSubmitValues {
  validatePassword: string;
}
