import { logout } from 'app/slices/authSlice';
import { RootState } from 'app/store';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isExpiredJwt } from 'utils/parseJwt';

export const CheckToken: FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      if (isExpiredJwt(token)) dispatch(logout());
    }
  }, [token, logout]);

  return <></>;
};
