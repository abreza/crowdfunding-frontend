import { HomepageContext } from 'templates/Homepages';
import { Button } from '@material-ui/core';
import NavbarLogo from 'components/atoms/NavbarLogo';
import NavbarSearch from 'components/atoms/NavbarSearch';
import { useContext, ReactElement } from 'react';
import { Link } from 'react-router-dom';

const LandingAppBarItems = () => {
  const { openAuthDialog } = useContext(HomepageContext);

  const SignUpButton: ReactElement = (
    <Button onClick={openAuthDialog}>ثبت‌نام</Button>
  );

  const LoginButton: ReactElement = (
    <Button onClick={openAuthDialog}>ورود</Button>
  );

  const WICButton: ReactElement = (
    <Button component={Link} to="/?sc=what-is-crowdfunding">
      تامین‌مالی جمعی چیست؟
    </Button>
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
