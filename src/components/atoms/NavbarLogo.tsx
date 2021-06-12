import { FC } from 'react';

const NavbarLogo: FC<{}> = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + 'logo3.png'}
      alt="logo"
      style={{ height: 35 }}
    />
  );
};

export default NavbarLogo;
