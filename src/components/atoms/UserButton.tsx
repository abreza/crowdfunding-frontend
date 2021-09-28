import { Avatar, Button, Divider, Menu, MenuItem } from '@mui/material';
import { UserRo } from 'types/auth';
import { logout } from 'app/slices/authSlice';
import { RootState } from 'app/store';
import { HomepageContext } from 'context/HomepageContext';
import React, { FC, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { baseUrl } from 'config';

const LoginButton: FC = () => {
  const { openAuthDialog } = useContext(HomepageContext);

  return (
    <Button onClick={() => openAuthDialog()} variant="outlined" color="primary">
      ورود
    </Button>
  );
};

const ProfileButton: FC<{ user: UserRo }> = ({ user }) => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToProfile = () => {
    push('/account');
    handleClose();
  };

  const goToMyProjects = () => {
    push('/dashboard');
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        startIcon={
          <Avatar
            sx={{
              width: 24,
              height: 24,
            }}
            src={user.avatarAddress && baseUrl + user.avatarAddress}
          />
        }>
        {user.firstName} {user.lastName}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <MenuItem onClick={goToProfile}>پروفایل</MenuItem>
        <MenuItem onClick={goToMyProjects}>پروژه‌های من</MenuItem>
        <Divider />
        <MenuItem onClick={() => dispatch(logout())}>خروج</MenuItem>
      </Menu>
    </>
  );
};

const UserButton: FC = () => {
  const { user, token } = useSelector((state: RootState) => state.auth);
  return token ? <ProfileButton user={user} /> : <LoginButton />;
};

export default UserButton;
