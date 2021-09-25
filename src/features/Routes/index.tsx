import { SectionLoader } from 'components/SectionLoader';
import React, { FC, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import frontendUrls from './urlConsts';

const HomePage = lazy(() => import('../../components/Sections/Home'));
const AboutPage = lazy(() => import('../../components/Sections/About'));
const ExperiencePage = lazy(
  () => import('../../components/Sections/Experience')
);

interface Props {
  location: Record<string, any>;
}

const Router: FC<Props> = ({ location }) => (
  <Suspense fallback={<SectionLoader />}>
    <Switch>
      <Route exact path={frontendUrls.urlHome}>
        <HomePage />
      </Route>
      <Route path={frontendUrls.urlAbout}>
        <AboutPage />
      </Route>
      <Route path={frontendUrls.urlExperience}>
        <ExperiencePage />
      </Route>
    </Switch>
  </Suspense>
);

export default Router;
