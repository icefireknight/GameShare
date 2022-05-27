import React from 'react';

import { Header, Segment} from 'semantic-ui-react';


export default function PageHeader({handleLogout}){
    return (
        <Segment>
            <Header as='h2' >
              <button onClick={handleLogout}>
                  Sign Out
              </button>
            </Header>
        </Segment>
    )
}