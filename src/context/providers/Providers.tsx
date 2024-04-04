'use client';
import { PropsWithChildren } from 'react';
import { UserProvider } from './UserContext';
import CustomThemeProvider from './CustomThemeProvider';

// A neat, singular place to control context providers

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CustomThemeProvider>
      <UserProvider>{children}</UserProvider>
    </CustomThemeProvider>
  );
};

export default Providers;
