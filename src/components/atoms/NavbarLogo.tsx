import UseWindowDimensions from 'components/hoc/UseWindowSize';
import React, { FC } from 'react';
import logo2 from 'assets/images/logo2.png';
import logo3 from 'assets/images/logo3.png';
import Link from 'components/atoms/Link';
import SImage from './image/Image';

const NavbarLogo: FC = () => {
  const windowDimensions = UseWindowDimensions();

  return (
    <Link href="/" passHref>
      <SImage
        src={windowDimensions.width < 960 ? logo2 : logo3}
        alt="logo"
        width={70}
        layout="fill"
      />
    </Link>
  );
};

export default NavbarLogo;
