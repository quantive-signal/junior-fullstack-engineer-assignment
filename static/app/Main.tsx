import {browserHistory, Router, RouterContext} from 'react-router';
import {routes} from 'cliff/routes';
import {RouteContext} from 'cliff/views/routeContext';

function Main() {
  return (
    <Router
      history={browserHistory}
      render={props => (
        <RouteContext.Provider value={props}>
          <RouterContext {...props} />
        </RouteContext.Provider>
      )}
    >
      {routes()}
    </Router>
  );
}

export default Main;
