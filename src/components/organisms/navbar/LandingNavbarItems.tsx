import { Button } from '@material-ui/core';
import NavbarLogo from 'components/atoms/NavbarLogo';
import NavbarSearch from 'components/atoms/NavbarSearch';

const LandingAppBarItems = () => {
  return {
    desktopLeftItems: [<Button>ثبت‌نام</Button>, <Button>ورود</Button>],
    desktopRightItems: [
      <NavbarLogo />,
      <Button>تامین‌مالی جمعی چیست؟</Button>,
      <NavbarSearch />,
    ],
    mobileLeftItems: [<NavbarLogo />],
    mobileRightItems: [<NavbarSearch />],
    mobileMenuListItems: [
      <Button>ثبت‌نام</Button>,
      <Button>ورود</Button>,
      <Button>تامین‌مالی جمعی چیست؟</Button>,
    ],
  };
};

export default LandingAppBarItems;
