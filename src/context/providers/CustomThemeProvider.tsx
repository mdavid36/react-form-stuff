import theme from '@/theme/theme';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
