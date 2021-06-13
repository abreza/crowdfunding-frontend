import Landing from 'pages/Landing';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

type RootDevProps = {};

const Root: FC<RootDevProps> = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </>
  );
};

export default Root;
