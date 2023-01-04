import {Fragment, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router';
import OrganizationsStore from 'cliff/stores/organizationsStore';
import {Organization} from 'cliff/types';

type RouteParams = {
  orgId: string;
};

type Props = RouteComponentProps<RouteParams, {}>;

function OrganizationDetails(props: Props) {
  const [orgs, setOrgs] = useState<Organization[]>([]);

  useEffect(() => {
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
