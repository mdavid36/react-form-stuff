import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import { AuthTypeRadioGroupProps } from './types/authTypes';

const AuthTypeRadioGroup = ({
  setAuthType,
  handleReset
}: AuthTypeRadioGroupProps) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Do you need to login or register?
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue="login"
        onChange={(event, value) => {
          handleReset();
          setAuthType(value);
        }}
      >
        <FormControlLabel value="login" control={<Radio />} label="Login" />
        <FormControlLabel
          value="register"
          control={<Radio />}
          label="Register"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default AuthTypeRadioGroup;
