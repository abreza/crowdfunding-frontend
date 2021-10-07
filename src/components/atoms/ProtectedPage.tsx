import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/app/store';
import { useRouter } from 'next/router';

const ProtectedPage: FC<{ onlyAdmin?: boolean }> = ({
  children,
  onlyAdmin = false,
}) => {
  const { push } = useRouter();

  const { token, isAdmin } = useSelector<
    RootStateType,
    { token: string; isAdmin: boolean }
  >((state) => ({
    token: state.auth.token,
    isAdmin: state.auth.user?.roleNames?.includes('ADMIN'),
  }));

  const haveAccess = token && (!onlyAdmin || isAdmin);

  useEffect(() => {
    if (!haveAccess) {
      push('/');
    }
  }, [haveAccess, push]);

  return <>{haveAccess && children}</>;
};

export default ProtectedPage;
