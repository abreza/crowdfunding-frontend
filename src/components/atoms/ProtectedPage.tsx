import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from 'app/store';
import { useRouter } from 'next/router';

const ProtectedPage: FC = ({ children }) => {
  const { push } = useRouter();

  const token = useSelector((state: RootStateType) => state.auth.token);

  useEffect(() => {
    if (!token) {
      push('/');
    }
  }, [token, push]);

  return <>{token && children}</>;
};

export default ProtectedPage;
