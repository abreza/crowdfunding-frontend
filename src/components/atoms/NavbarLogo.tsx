import UseWindowDimensions from 'components/hoc/UseWindowSize';
import { FC } from 'react';
import Link from 'next/link';

const NavbarLogo: FC<{}> = () => {
  const windowDimensions = UseWindowDimensions();

  return (
    <Link href="/">
      <img
        src={
          process.env.PUBLIC_URL +
          (windowDimensions.width < 960 ? '/logo2.png' : '/logo3.png')
        }
        alt="logo"
        style={{ height: 35 }}
      />
    </Link>
  );
};

export default NavbarLogo;
