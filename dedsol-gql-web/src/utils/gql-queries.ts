import { gql } from "@apollo/client";
import {
  AccountsConnection,
  LatestEntityMetadataConnection,
  MvLatestAccountLockersByAccountsConnection,
  MvLatestEntityVaultStatesConnection,
} from "../generated/types/graphql";

export interface AccountQueryResult {
  accounts: AccountsConnection;
}

export const ACCOUNT_QUERY = gql`
  query AccountQuery {
    accounts(
      condition: {
        address: "account_rdx129g33fn9k4ntg8nrs8adtjzjtejpk0eepv9w6za328d052c6l9dm3z"
      }
      first: 1
    ) {
      nodes {
        id
        address
        createdAt
      }
    }
  }
`;

export interface AccountVaultsQueryResult {
  mvLatestEntityVaultStates: MvLatestEntityVaultStatesConnection;
}

export const ACCOUNT_VAULTS_QUERY = gql`
  query AccountVaultsQuery {
    mvLatestEntityVaultStates(
      first: 10
      condition: { ownerEntityId: "3377898" }
    ) {
      nodes {
        vaultEntityId
        resourceEntityId
        balance
        discriminator
      }
    }
  }
`;

export interface AccountLockersQueryResult {
  mvLatestAccountLockersByAccounts: MvLatestAccountLockersByAccountsConnection;
}

export const ACCOUNT_LOCKERS_QUERY = gql`
  query AccountLockerQuery {
    mvLatestAccountLockersByAccounts(
      condition: { accountEntityId: "3377898" }
      first: 1
    ) {
      nodes {
        accountLockers {
          accountLockerEntityAddress
          accountLockerEntityId
          resourceVaultPairs {
            vaultEntityId
            vaultBalance
            resourceEntityId
          }
        }
      }
    }
  }
`;

export interface AccountMetadataQueryResult {
  latestEntityMetadata: LatestEntityMetadataConnection;
}

export interface MetadataValue {
  is_locked: boolean;
  value: {
    type: string;
    value: {
      kind: string;
      value: string;
    };
  };
}

export const ACCOUNT_METADATA_QUERY = gql`
  query AccountMetadataQuery {
    latestEntityMetadata(
      condition: {
        entityAddress: "account_rdx129g33fn9k4ntg8nrs8adtjzjtejpk0eepv9w6za328d052c6l9dm3z"
      }
      first: 1
    ) {
      nodes {
        metadata
      }
    }
  }
`;
