'use client';
import RHFLoginForm from '@/components/Auth/Login/RHFLoginForm';
import Container from '@mui/material/Container';

const RHFLogin = () => {
  return (
    <Container sx={{ paddingTop: '30px', background: '#fff' }}>
      <RHFLoginForm />
    </Container>
  );
};

export default RHFLogin;
