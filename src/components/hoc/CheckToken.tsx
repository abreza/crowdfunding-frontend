import { logout } from 'app/slices/authSlice';
import { RootState } from 'app/store';
import { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isExpiredJwt } from 'utils/parseJWT';

export const CheckToken: FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const dispatch = useDispatch();

  const checkToken = useCallback(async () => {
    if (token) {
      if (isExpiredJwt(token)) dispatch(logout());
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  return <></>;
};
