/* eslint-disable react/jsx-key */
import { Button } from '@mui/material';
import NavbarLogo from 'src/components/atoms/NavbarLogo';
import NavbarSearch from 'src/components/atoms/NavbarSearch';
import { ReactElement } from 'react';
import Link from 'next/link';
import UserButton from 'src/components/atoms/UserButton';
import CreateProjectButton from 'src/components/atoms/CreateProject';

const LandingAppBarItems = () => {
  const WICButton: ReactElement = (
    <Link href="/?sc=what-is-crowdfunding" passHref>
      <Button>تامین‌مالی جمعی چیست؟</Button>
    </Link>
  );

  return {
    desktopLeftItems: [<UserButton />, <CreateProjectButton />],
    desktopRightItems: [<NavbarLogo />, WICButton, <NavbarSearch />],
    mobileLeftItems: [<NavbarLogo />],
    mobileRightItems: [<NavbarSearch />],
    mobileMenuListItems: [<CreateProjectButton />, <UserButton />, WICButton],
  };
};

export default LandingAppBarItems;
