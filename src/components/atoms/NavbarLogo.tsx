import UseWindowDimensions from 'components/hoc/UseWindowSize';
import { FC } from 'react';
import logo2 from 'assets/images/logo2.png';
import logo3 from 'assets/images/logo3.png';
import Link from 'components/atoms/Link';

const NavbarLogo: FC<{}> = () => {
  const windowDimensions = UseWindowDimensions();

  return (
    <Link href="/" passHref>
      <img
        src={windowDimensions.width < 960 ? logo2 : logo3}
        alt="logo"
        style={{ height: 35 }}
      />
    </Link>
  );
};

export default NavbarLogo;
