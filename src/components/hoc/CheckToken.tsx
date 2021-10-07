import { logout } from 'src/app/slices/authSlice';
import { RootStateType } from 'src/app/store';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isExpiredJwt } from 'src/utils/parseJwt';

export const CheckToken: FC = () => {
  const token = useSelector<RootStateType, string>((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      if (isExpiredJwt(token)) dispatch(logout());
    }
  }, [token, logout]);

  return <></>;
};
