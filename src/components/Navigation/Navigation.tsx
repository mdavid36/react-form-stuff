'use client';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledNavBar } from '../styled/StyledNavBar';
import pages from '../../utils/static/corepages';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuItem } from '@mui/material';

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box width={'100%'} display={'flex'}>
      <StyledNavBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.path}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Form Stuff
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.path} passHref>
                <Button>{page.name}</Button>
              </Link>
            ))}
          </Box>
          <Button variant="contained" sx={{ color: '#fff' }}>
            Login
          </Button>
        </Toolbar>
      </StyledNavBar>
    </Box>
  );
};

export default Navigation;
