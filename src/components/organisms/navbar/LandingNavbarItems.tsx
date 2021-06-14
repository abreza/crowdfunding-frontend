import { HomepageContext } from 'templates/Homepages';
import { Button } from '@material-ui/core';
import NavbarLogo from 'components/atoms/NavbarLogo';
import NavbarSearch from 'components/atoms/NavbarSearch';
import { LandingContext } from 'pages/Landing';
import { useContext } from 'react';
import { useHistory } from 'react-router';

const LandingAppBarItems = () => {
  const { scrollToWIC } = useContext(LandingContext);
  const { openAuthDialog } = useContext(HomepageContext);

  const history = useHistory();

  return {
    desktopLeftItems: [
      <Button onClick={openAuthDialog}>ثبت‌نام</Button>,
      <Button onClick={openAuthDialog}>ورود</Button>,
    ],
    desktopRightItems: [
      <NavbarLogo />,
      <Button
        onClick={() => {
          const res = scrollToWIC();
          if (typeof res === 'string') {
            history.push(res);
          }
        }}>
        تامین‌مالی جمعی چیست؟
      </Button>,
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
