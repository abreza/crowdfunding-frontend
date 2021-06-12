import { FC } from 'react';
import { useAppSelector } from 'configs/redux/reduxCustomHooks';
import { Redirect, Route } from 'react-router-dom';

type PrivateRoutePropsType = {
  path: string;
  myProps: {
    PanelPage: FC<any>;
    title: string;
  };
};

const PrivateRoute: FC<PrivateRoutePropsType> = ({
  path,
  myProps,
  ...rest
}) => {
  const { token } = useAppSelector((state) => state.account);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        !!token ? (
          <div {...props} {...myProps} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
