'use client';
import { PropsWithChildren, createContext } from 'react';
import { UserContextType } from '../types/userContextTypes';

const userValues: UserContextType = {
  userFirstName: 'Allan',
  userId: 'allanson001',
  userLastName: 'allanson',
  userName: 'AllanTheDestroyer'
};
export const UserContext = createContext<UserContextType>(userValues);
export const UserProvider = ({ children }: PropsWithChildren) => {
  return (
    <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
  );
};
