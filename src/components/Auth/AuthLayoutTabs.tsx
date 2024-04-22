'use client';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Link from 'next/link';

const AuthLayoutTabs = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          value="one"
          label="react-hook-form using zod validation"
          href="/auth/rhf-login"
          component={Link}
        />
        <Tab
          value="two"
          label="formik using yup validation"
          href="/auth/formik"
          component={Link}
        />
      </Tabs>
    </Box>
  );
};

export default AuthLayoutTabs;
