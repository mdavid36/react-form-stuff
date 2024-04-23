import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ControlledTextField from '@/components/controlledInputs/ControlledTextField';
import ControlledPassword from '@/components/controlledInputs/ControlledPassword';
import LoginSchema from '@/utils/validation/zodValidation/zodLoginValidation';

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
      <ControlledTextField
        name="userName"
        control={control}
        label="User Name"
      />
      <ControlledPassword name="password" control={control} label="Password" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RHFLoginForm;
