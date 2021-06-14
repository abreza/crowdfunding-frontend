import Landing from 'pages/Landing';
import Projects from 'pages/Projects';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

type RootDevProps = {};

const Root: FC<RootDevProps> = () => {
  return (
    <>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Landing} />
      </Switch>
    </>
  );
};

export default Root;
