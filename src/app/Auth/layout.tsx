import AuthLayoutTabs from '@/components/Auth/AuthLayoutTabs';
import { Container } from '@mui/material';

const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <AuthLayoutTabs />
      {children}
    </Container>
  );
};

export default AuthLayout;
