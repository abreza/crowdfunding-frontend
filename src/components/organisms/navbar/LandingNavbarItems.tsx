import { Button } from '@material-ui/core';
import NavbarLogo from 'components/atoms/NavbarLogo';
import NavbarSearch from 'components/atoms/NavbarSearch';
import { LandingContext } from 'pages/Landing';
import { useContext } from 'react';

const LandingAppBarItems = () => {
  const { scrollToWIC, openAuthDialog } = useContext(LandingContext);

  return {
    desktopLeftItems: [
      <Button onClick={openAuthDialog}>ثبت‌نام</Button>,
      <Button onClick={openAuthDialog}>ورود</Button>,
    ],
    desktopRightItems: [
      <NavbarLogo />,
      <Button onClick={scrollToWIC}>تامین‌مالی جمعی چیست؟</Button>,
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
