import { PropsWithChildren } from 'react';

// A neat, singular place to control context providers

const Providers = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Providers;
