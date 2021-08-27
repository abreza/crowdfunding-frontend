/* eslint-disable react/jsx-key */
import { Button } from '@material-ui/core';
import NavbarLogo from 'components/atoms/NavbarLogo';
import NavbarSearch from 'components/atoms/NavbarSearch';
import { ReactElement } from 'react';
import Link from 'next/link';
import UserButton from 'components/atoms/UserButton';
import CreateProjectButton from 'components/atoms/CreateProject';

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
