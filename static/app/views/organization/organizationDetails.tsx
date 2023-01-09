import {Fragment, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';
import OrganizationsStore from 'cliff/stores/organizationsStore';
import {Organization} from 'cliff/types';
import {Client} from 'cliff/api';
type RouteParams = {
  orgId: string;
};

type Props = RouteComponentProps<RouteParams, {} & {
  api: Client;
}>;

function OrganizationDetails(props: Props) {
  const [orgs, setOrgs] = useState<Organization[]>([]);

  useEffect(() => {
    const api = new Client()

    // replace todos with with your backend api endpoint 
    // after using api.tsx your api call will looks like 'http://localhost:6001/api/0/todos' where 'http://localhost:6001/api/0/ is written in api.tsx, you can configure it accordingly 
    const res =  api.requestPromise('/todos', {
      method: 'GET',
    });
    console.log('res',res);

    setOrgs(OrganizationsStore.getAll());
  }, [orgs]);

  return (
    <div style={{
      padding: '15px',
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
    }}>
      <h3>Junior Full Stack Developer Assignment</h3>
      <small>show insight card in here.....</small>
    </div>
  );
}

export default OrganizationDetails;