import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop: FC<any> = ({ history, children }) => {
  const router = useRouter();
  const { sc } = router.query;

  useEffect(() => {
    if (sc) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [history, sc]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
