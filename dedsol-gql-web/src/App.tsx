// App.tsx
import React from 'react';
import { Card, Typography, Spin } from 'antd';
import styled from '@emotion/styled';

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import { 
  ACCOUNT_LOCKERS_QUERY, 
  ACCOUNT_METADATA_QUERY, 
  ACCOUNT_QUERY, 
  ACCOUNT_VAULTS_QUERY, 
  AccountLockersQueryResult, 
  AccountMetadataQueryResult, 
  AccountQueryResult, 
  AccountVaultsQueryResult, 
  MetadataValue 
} from './utils/gql-queries';
import { ESMap } from 'typescript';

// --------------------------------------------------
// 1. Setup Apollo Client (GraphQL)
// --------------------------------------------------

const client = new ApolloClient({
  uri: 'http://localhost:3062/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'dedsol-xxxxxxxx-xxxx-xxxxxx-xxxxx'
  }
});

// --------------------------------------------------
//  Fetch Account Info
// --------------------------------------------------

const AccountInfoSection: React.FC = () => {
  const { loading, error, data } = useQuery<AccountQueryResult>(ACCOUNT_QUERY);

  if (loading) return <Spin size="small" />;
  if (error) return <Text type="danger">Error: {error.message}</Text>;
  if (!data) return <Text type="danger">No data available</Text>;

  // console.log(data);

  if (data.accounts.nodes.length === 0) {
    return (<Text strong>Account not found</Text>)
  }

  return (
    <div>
      {data.accounts.nodes.map((account, index) => (
        <div key={index}>
          <Text strong>Id: </Text><Text>{account.id}</Text><br />
          <Text strong>Address: </Text><Text>{account.address}</Text><br />
          <Text strong>Created: </Text><Text>{account.createdAt}</Text><br />
        </div>
      ))}
    </div>
  )
}

// --------------------------------------------------
//  Fetch Account Metdata
// --------------------------------------------------

const AccountMetadataSection: React.FC = () => {
  const { loading, error, data } = useQuery<AccountMetadataQueryResult>(ACCOUNT_METADATA_QUERY);

  if (loading) return <Spin size="small" />;
  if (error) return <Text type="danger">Error: {error.message}</Text>;
  if (!data) return <Text type="danger">No metadata available</Text>;

  const response = data.latestEntityMetadata.nodes;
  if (response.length === 0) {
    return (<Text strong>No metadata for account.</Text>)
  }

  const metadata = response[0].metadata as ESMap<string, MetadataValue>;

  return (
    <div>
      {
        Object.entries(metadata).map(([key, value], index) => {
          return (
            <div key={index} style={{ marginBottom: '16px' }}>
              <div>
                <Text strong>Name: </Text><Text>{key}</Text>
                <br />
                <Text strong>Is Locked: </Text><Text>{value.is_locked ? "Yes" : "No"}</Text>
                <br />
                <Text strong>Value: </Text>
                <Text code>{JSON.stringify(value.value.value)}</Text>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// --------------------------------------------------
//  Fetch Account Vaults
// --------------------------------------------------

const AccountVaults: React.FC = () => {
  const { loading, error, data } = useQuery<AccountVaultsQueryResult>(ACCOUNT_VAULTS_QUERY);

  if (loading) return <Spin size="small" />;
  if (error) return <Text type="danger">Error: {error.message}</Text>;
  if (!data) return <Text type="danger">No account vaults available</Text>;

  const vaults = data.mvLatestEntityVaultStates.nodes;

  return (
    <div>
      {
        vaults.map((vault, index) => {
          return (
            <div key={index} style={{ marginBottom: '16px' }}>
              <div>
                <Text strong>Vault Entity Id: </Text><Text>{vault.vaultEntityId}</Text>
                <br />
                <Text strong>Resource Entity Id: </Text><Text>{vault.resourceEntityId}</Text>
                <br />
                <Text strong>Discriminator: </Text><Text>{vault.discriminator}</Text>
                <br />
                <Text strong>Balance: </Text><Text>{vault.balance}</Text>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// --------------------------------------------------
//  Fetch Account Lockers
// --------------------------------------------------

const AccountLockers: React.FC = () => {
  const { loading, error, data } = useQuery<AccountLockersQueryResult>(ACCOUNT_LOCKERS_QUERY);

  if (loading) return <Spin size="small" />;
  if (error) return <Text type="danger">Error: {error.message}</Text>;
  if (!data) return <Text type="danger">No lockers available</Text>;

  const result = data.mvLatestAccountLockersByAccounts.nodes;

  if (result.length === 0) {
    return (<Text strong>No lockers for account.</Text>)
  }

  const lockers = result[0].accountLockers;

  return (
    <div>
      {
        lockers!.map((locker, index) => {
          return (
            <div key={index} style={{ marginBottom: '16px' }}>
              <div>
                <Text strong>Entity Address: </Text><Text>{locker!.accountLockerEntityAddress}</Text>
                <br />
                <Text strong>Entity Id: </Text><Text>{locker!.accountLockerEntityId}</Text>
                <br />
                {locker?.resourceVaultPairs && locker?.resourceVaultPairs.map((pair, index) => (
                  <div key={index}>
                    <Text strong>Vault Entity Id: </Text><Text>{pair!.vaultEntityId}</Text>
                    <br />
                    <Text strong>Resource Entity Id: </Text><Text>{pair!.resourceEntityId}</Text>
                    <br />
                    <Text strong>Balance: </Text><Text>{pair!.vaultBalance}</Text>
                  </div>
                ))}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

// --------------------------------------------------
//  Account Card
// --------------------------------------------------

const AccountCard: React.FC = () => {
  return (
    <StyledCard>
      <Title level={3}>Account Information</Title>
      <AccountInfoSection />
      <Title level={3}>Metadata</Title>
      <AccountMetadataSection />
      <Title level={3}>Account Vaults</Title>
      <AccountVaults />
      <Title level={3}>Account Lockers</Title>
      <AccountLockers />
    </StyledCard>
  );
}

// --------------------------------------------------
//  App
// --------------------------------------------------

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <AccountCard />
      </AppContainer>
    </ApolloProvider>
  );
}



// --------------------------------------------------
// Ignore: Styling & UI components
// --------------------------------------------------

const { Title, Text } = Typography;

// Styled components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #00008B, #8A2BE2);
`;

const StyledCard = styled(Card)`
  width: 700px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  .ant-card-body {
    padding: 0px 24px 16px 24px;
  }
`;

export default App;