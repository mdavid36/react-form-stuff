import { z } from 'zod';

const zStringReq = ({ msg, label }: { msg?: string; label?: string }) => {
  let message = 'This field is Required';
  if (msg) {
    message = msg;
  }
  if (label && !msg) {
    message = `${label} is Requried`;
  }
  return z.string().trim().min(1, { message: message });
};

export default zStringReq;
