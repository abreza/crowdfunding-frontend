/* eslint-disable react/jsx-key */
import { Button } from '@material-ui/core';
import NavbarLogo from 'components/atoms/NavbarLogo';
import NavbarSearch from 'components/atoms/NavbarSearch';
import { useContext, ReactElement } from 'react';
import Link from 'next/link';
import { HomepageContext } from 'contex/HompageContext';

const LandingAppBarItems = () => {
  const { openAuthDialog } = useContext(HomepageContext);

  const SignUpButton: ReactElement = (
    <Link href="/new" passHref>
      <Button variant="contained" color="primary">
        ایجاد پروژه جدید
      </Button>
    </Link>
  );

  const LoginButton: ReactElement = (
    <Button onClick={openAuthDialog} variant="outlined" color="primary">
      ورود
    </Button>
  );

  const WICButton: ReactElement = (
    <Link href="/?sc=what-is-crowdfunding" passHref>
      <Button>تامین‌مالی جمعی چیست؟</Button>
    </Link>
  );

  return {
    desktopLeftItems: [SignUpButton, LoginButton],
    desktopRightItems: [<NavbarLogo />, WICButton, <NavbarSearch />],
    mobileLeftItems: [<NavbarLogo />],
    mobileRightItems: [<NavbarSearch />],
    mobileMenuListItems: [SignUpButton, LoginButton, WICButton],
  };
};

export default LandingAppBarItems;
