import { z } from 'zod';
import zStringReq from './zodReusables';

const zodLoginSchema = z.object({
  userName: zStringReq({ label: 'User Name' }),
  password: zStringReq({ label: 'Password' })
    .min(8, { message: 'Password is too short - should be 8 chars minimum.' })
    .regex(/[a-zA-Z]/, { message: 'Password can only contain Latin letters.' })
});

export default zodLoginSchema;
