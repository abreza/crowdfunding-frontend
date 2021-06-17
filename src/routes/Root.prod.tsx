import ScrollToTop from 'components/atoms/scrollToTop/ScrollToTop';
import Blog from 'pages/Blog';
import Landing from 'pages/Landing';
import Post from 'pages/Post';
import Project from 'pages/Project';
import Projects from 'pages/Projects';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

type RootProdProps = {};

const Root: FC<RootProdProps> = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/post/:id" component={Post} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={Project} />
        <Route path="/" component={Landing} />
      </Switch>
    </ScrollToTop>
  );
};

export default Root;
