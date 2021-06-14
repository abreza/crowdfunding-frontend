import { FC, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop: FC<any> = ({ history, children }) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
    return () => {
      unListen();
    };
  }, []);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
