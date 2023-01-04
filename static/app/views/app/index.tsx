import {useCallback, useEffect} from 'react';
import styled from '@emotion/styled';
import OrganizationsStore from 'cliff/stores/organizationsStore';
// import {Client} from 'cliff/api';
import useApi from 'cliff/utils/useApi';

import one from '../../../../assests/svg/company_logo_name.svg';

type Props = {
  children: React.ReactNode;
};

function App({children}: Props) {
  const api = useApi();
  // const client = new Client({baseUrl: 'https://sentry.io'});
  // const api = useApi({api: client});

  /**
   * Loads the users organization list into the OrganizationsStore
   */
  const loadOrganizations = useCallback(async () => {
    try {
      const data = await api.requestPromise('/organizations/', {query: {member: '1'}});
      OrganizationsStore.load(data);
    } catch {
      // TODO: do something?
    }
  }, [api]);

  useEffect(() => {
    loadOrganizations();
    // When the app is unloaded clear the organizationst list
    return () => OrganizationsStore.load([]);
  }, [loadOrganizations]);

  return (
    <MainContainer>
      <div
        style={{
          padding: '5px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={one} style={{width:'200px'}}/>
      </div>
      <div>{children}</div>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  outline: none;
`;
