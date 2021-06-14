import ScrollToTop from 'components/atoms/scrollToTop/ScrollToTop';
import Landing from 'pages/Landing';
import Project from 'pages/Project';
import Projects from 'pages/Projects';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

type RootDevProps = {};

const Root: FC<RootDevProps> = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={Project} />
        <Route path="/" component={Landing} />
      </Switch>
    </ScrollToTop>
  );
};

export default Root;
