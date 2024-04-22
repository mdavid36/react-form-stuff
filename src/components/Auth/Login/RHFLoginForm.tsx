import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ControlledInput from '@/components/controlledInput/ControlledInput';

const zStringReq = (msg?: string, label?: string) => {
  let message = 'This field is Required';
  if (msg) {
    message = msg;
  }
  if (label && !msg) {
    message = `${label} is Requried`;
  }
  return z.string().trim().min(1, { message: message });
};

const LoginSchema = z.object({
  userName: zStringReq('User Name'),
  password: zStringReq('Password')
    .min(8, { message: 'Password is too short - should be 8 chars minimum.' })
    .regex(/[a-zA-Z]/, { message: 'Password can only contain Latin letters.' })
});

const initialVals = {
  userName: '',
  password: ''
};

type LoginCreds = z.infer<typeof LoginSchema>;

const RHFLoginForm = () => {
  const { control, handleSubmit } = useForm<LoginCreds>({
    defaultValues: initialVals,
    resolver: zodResolver(LoginSchema)
  });

  const onSubmit: SubmitHandler<LoginCreds> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput name="userName" control={control} label="User Name" />
      <ControlledInput name="password" control={control} label="Password" />
      <Button
        type="submit"
        onClick={() => {
          handleSubmit(onSubmit);
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default RHFLoginForm;
