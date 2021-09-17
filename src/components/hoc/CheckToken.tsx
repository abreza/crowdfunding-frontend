import { useVerifyTokenMutation } from 'app/services/auth';
import { RootState } from 'app/store';
import { FC, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

export const CheckToken: FC = () => {
  const [verifyToken] = useVerifyTokenMutation();
  const token = useSelector((state: RootState) => state.auth.token);

  const checkToken = useCallback(async () => {
    if (token) {
      await verifyToken({ token }).unwrap();
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  return <></>;
};
