import {Fragment} from 'react';
import {
  //   IndexRedirect,
  IndexRoute as BaseIndexRoute,
  IndexRouteProps,
  Redirect,
  Route as BaseRoute,
  RouteProps,
} from 'react-router';
import LazyLoad from 'cliff/components/lazyLoad';
// import HookStore from 'sentry/stores/hookStore';
// import {HookName} from 'sentry/types/hooks';
import errorHandler from 'cliff/utils/errorHandler';
import App from 'cliff/views/app';
// import Test from 'cliff/views/test';
import AuthLayout from 'cliff/views/auth/layout';
import RouteNotFound from 'cliff/views/routeNotFound';
import memoize from 'lodash/memoize';

type CustomProps = {
  name?: string;
};

/**
 * We add some additional props to our routes
 */

const Route = BaseRoute as React.ComponentClass<RouteProps & CustomProps>;
const IndexRoute = BaseIndexRoute as React.ComponentClass<IndexRouteProps & CustomProps>;

// const hook = (name: HookName) => HookStore.get(name).map(cb => cb());

const SafeLazyLoad = errorHandler(LazyLoad);

type PromisedImport<C> = Promise<{default: C}>;
type ComponentType = React.ComponentType<any>;

export function makeLazyloadComponent<C extends ComponentType>(
  resolve: () => PromisedImport<C>
) {
  // XXX: Assign the component to a variable so it has a displayname
  const RouteLazyLoad: React.FC<React.ComponentProps<C>> = props => {
    return <SafeLazyLoad {...props} component={resolve} />;
  };

  return RouteLazyLoad;
}

// // Shorthand to avoid extra line wrapping
const make = makeLazyloadComponent;

function buildRoutes() {
  const authRoutes = (
    <Fragment>
      <Redirect from="/auth" to="/auth/login" />
      <Route path="/auth/" component={errorHandler(AuthLayout)}>
        <Route path="login" component={make(() => import('cliff/views/auth/login'))} />
        <Route
          path="register"
          component={make(() => import('cliff/views/auth/register'))}
        />
      </Route>
    </Fragment>
  );

  const rootRoutes = (
    <Fragment>
      <IndexRoute component={make(() => import('cliff/views/app/root'))} />
      <Route path="test" component={make(() => import('cliff/views/test'))} />
    </Fragment>
  );

  const orgRoutes = (
    <Fragment>
      <Route
        path="organizations"
        component={make(() => import('cliff/views/organization/layout'))}
      >
        <Route
          path=":orgId"
          component={make(() => import('cliff/views/organization/organizationDetails'))}
        />
      </Route>
    </Fragment>
  );

  // eslint-disable-next-line no-lone-blocks
  {
    /* {authRoutes} */
  }
  const appRoutes = (
    <Route>
      {authRoutes}
      <Route path="/" component={errorHandler(App)}>
        {rootRoutes}
        {orgRoutes}
      </Route>
      <Route path="*" component={errorHandler(RouteNotFound)} />
    </Route>
  );
  return appRoutes;
}

// We load routes both when initlaizing the SDK (for routing integrations) and
// when the app renders Main. Memoize to avoid rebuilding the route tree.
export const routes = memoize(buildRoutes);
