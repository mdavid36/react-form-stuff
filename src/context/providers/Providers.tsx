import { PropsWithChildren } from 'react';
import { UserProvider } from './UserContext';

// A neat, singular place to control context providers

const Providers = ({ children }: PropsWithChildren) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
