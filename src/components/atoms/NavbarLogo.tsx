import React, { FC } from 'react';
import logo2 from 'src/assets/images/logo2.png';
import logo3 from 'src/assets/images/logo3.png';
import Link from 'src/components/atoms/Link';
import Image from 'next/image';
import { Box, useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';

const NavbarLogo: FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Link href="/" passHref>
      <Box sx={{ width: { xs: 30, sm: 90 }, height: 30, position: 'relative' }}>
        <Image
          src={isXs ? logo2 : logo3}
          layout="fill"
          alt="logo"
          width="100%"
        />
      </Box>
    </Link>
  );
};

export default NavbarLogo;
