import {
  Avatar,
  Button,
  Divider,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { UserRo } from 'types/auth';
import { logout } from 'app/slices/authSlice';
import { RootState } from 'app/store';
import { HomepageContext } from 'contex/HompageContext';
import React, { FC, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginButton: FC = () => {
  const { openAuthDialog } = useContext(HomepageContext);

  return (
    <Button onClick={openAuthDialog} variant="outlined" color="primary">
      ورود
    </Button>
  );
};

const useProfileButtonStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const ProfileButton: FC<{ user: UserRo }> = ({ user }) => {
  const classes = useProfileButtonStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        startIcon={<Avatar className={classes.smallAvatar} />}>
        {user.firstName} {user.lastName}
      </Button>
      <Menu
        getContentAnchorEl={null}
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
        <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        <MenuItem onClick={handleClose}>پروژه‌های من</MenuItem>
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
