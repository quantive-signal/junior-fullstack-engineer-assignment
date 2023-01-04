import {Fragment} from 'react';

type Props = {
  error?: Error;
};
function RouteError({error}: Props) {
  return (
    <Fragment>
      <p>RouteError: Something Wrong With This Route</p>
      <p>{error?.message}</p>
    </Fragment>
  );
}

export default RouteError;
