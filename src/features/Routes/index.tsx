import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
// Dynamic import HOC
import asyncComponent from 'shared/hocs/asyncComponent';

const AsyncHomePage = asyncComponent(
  () => import('../../components/Sections/Home/index')
);

interface Props {
  location: Record<string, any>;
}

const Router: FC<Props> = ({ location }) => (
  <>
    <Switch>
      <Route key="/home" path="/home" component={AsyncHomePage} />
    </Switch>
  </>
);

export default Router;
