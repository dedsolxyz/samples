export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: { input: any; output: any; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Reads a single `LatestAccountLockersByAccount` that is related to this `Account`. */
  latestAccountLockers?: Maybe<LatestAccountLockersByAccount>;
};

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['BigInt']['input']>;
};

export type AccountLocker = {
  __typename?: 'AccountLocker';
  accountLockerEntityAddress?: Maybe<Scalars['String']['output']>;
  accountLockerEntityId?: Maybe<Scalars['BigInt']['output']>;
  resourceVaultPairs?: Maybe<Array<Maybe<ResourceVaultPair>>>;
};

/** An input for mutations affecting `AccountLocker` */
export type AccountLockerInput = {
  accountLockerEntityAddress?: InputMaybe<Scalars['String']['input']>;
  accountLockerEntityId?: InputMaybe<Scalars['BigInt']['input']>;
  resourceVaultPairs?: InputMaybe<Array<InputMaybe<ResourceVaultPairInput>>>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Account>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node: Account;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL'
}

export type LatestAccountLockersByAccount = {
  __typename?: 'LatestAccountLockersByAccount';
  accountEntityId?: Maybe<Scalars['BigInt']['output']>;
  accountLockers?: Maybe<Array<Maybe<AccountLocker>>>;
};

/**
 * A condition to be used against `LatestAccountLockersByAccount` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type LatestAccountLockersByAccountCondition = {
  /** Checks for equality with the object’s `accountEntityId` field. */
  accountEntityId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `accountLockers` field. */
  accountLockers?: InputMaybe<Array<InputMaybe<AccountLockerInput>>>;
};

/** A connection to a list of `LatestAccountLockersByAccount` values. */
export type LatestAccountLockersByAccountsConnection = {
  __typename?: 'LatestAccountLockersByAccountsConnection';
  /** A list of edges which contains the `LatestAccountLockersByAccount` and cursor to aid in pagination. */
  edges: Array<LatestAccountLockersByAccountsEdge>;
  /** A list of `LatestAccountLockersByAccount` objects. */
  nodes: Array<LatestAccountLockersByAccount>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LatestAccountLockersByAccount` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `LatestAccountLockersByAccount` edge in the connection. */
export type LatestAccountLockersByAccountsEdge = {
  __typename?: 'LatestAccountLockersByAccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `LatestAccountLockersByAccount` at the end of the edge. */
  node: LatestAccountLockersByAccount;
};

/** Methods to use when ordering `LatestAccountLockersByAccount`. */
export enum LatestAccountLockersByAccountsOrderBy {
  AccountEntityIdAsc = 'ACCOUNT_ENTITY_ID_ASC',
  AccountEntityIdDesc = 'ACCOUNT_ENTITY_ID_DESC',
  AccountLockersAsc = 'ACCOUNT_LOCKERS_ASC',
  AccountLockersDesc = 'ACCOUNT_LOCKERS_DESC',
  Natural = 'NATURAL'
}

/** A connection to a list of `LatestEntityMetadatum` values. */
export type LatestEntityMetadataConnection = {
  __typename?: 'LatestEntityMetadataConnection';
  /** A list of edges which contains the `LatestEntityMetadatum` and cursor to aid in pagination. */
  edges: Array<LatestEntityMetadataEdge>;
  /** A list of `LatestEntityMetadatum` objects. */
  nodes: Array<LatestEntityMetadatum>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `LatestEntityMetadatum` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `LatestEntityMetadatum` edge in the connection. */
export type LatestEntityMetadataEdge = {
  __typename?: 'LatestEntityMetadataEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `LatestEntityMetadatum` at the end of the edge. */
  node: LatestEntityMetadatum;
};

/** Methods to use when ordering `LatestEntityMetadatum`. */
export enum LatestEntityMetadataOrderBy {
  EntityAddressAsc = 'ENTITY_ADDRESS_ASC',
  EntityAddressDesc = 'ENTITY_ADDRESS_DESC',
  EntityIdAsc = 'ENTITY_ID_ASC',
  EntityIdDesc = 'ENTITY_ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataDesc = 'METADATA_DESC',
  Natural = 'NATURAL'
}

export type LatestEntityMetadatum = {
  __typename?: 'LatestEntityMetadatum';
  entityAddress?: Maybe<Scalars['String']['output']>;
  entityId?: Maybe<Scalars['BigInt']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
};

/**
 * A condition to be used against `LatestEntityMetadatum` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type LatestEntityMetadatumCondition = {
  /** Checks for equality with the object’s `entityAddress` field. */
  entityAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `entityId` field. */
  entityId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
};

export type MvLatestAccountLockersByAccount = {
  __typename?: 'MvLatestAccountLockersByAccount';
  accountEntityId?: Maybe<Scalars['BigInt']['output']>;
  accountLockers?: Maybe<Array<Maybe<AccountLocker>>>;
};

/**
 * A condition to be used against `MvLatestAccountLockersByAccount` object types.
 * All fields are tested for equality and combined with a logical ‘and.’
 */
export type MvLatestAccountLockersByAccountCondition = {
  /** Checks for equality with the object’s `accountEntityId` field. */
  accountEntityId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `accountLockers` field. */
  accountLockers?: InputMaybe<Array<InputMaybe<AccountLockerInput>>>;
};

/** A connection to a list of `MvLatestAccountLockersByAccount` values. */
export type MvLatestAccountLockersByAccountsConnection = {
  __typename?: 'MvLatestAccountLockersByAccountsConnection';
  /** A list of edges which contains the `MvLatestAccountLockersByAccount` and cursor to aid in pagination. */
  edges: Array<MvLatestAccountLockersByAccountsEdge>;
  /** A list of `MvLatestAccountLockersByAccount` objects. */
  nodes: Array<MvLatestAccountLockersByAccount>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MvLatestAccountLockersByAccount` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MvLatestAccountLockersByAccount` edge in the connection. */
export type MvLatestAccountLockersByAccountsEdge = {
  __typename?: 'MvLatestAccountLockersByAccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MvLatestAccountLockersByAccount` at the end of the edge. */
  node: MvLatestAccountLockersByAccount;
};

/** Methods to use when ordering `MvLatestAccountLockersByAccount`. */
export enum MvLatestAccountLockersByAccountsOrderBy {
  AccountEntityIdAsc = 'ACCOUNT_ENTITY_ID_ASC',
  AccountEntityIdDesc = 'ACCOUNT_ENTITY_ID_DESC',
  AccountLockersAsc = 'ACCOUNT_LOCKERS_ASC',
  AccountLockersDesc = 'ACCOUNT_LOCKERS_DESC',
  Natural = 'NATURAL'
}

export type MvLatestEntityVaultState = {
  __typename?: 'MvLatestEntityVaultState';
  balance?: Maybe<Scalars['BigFloat']['output']>;
  discriminator?: Maybe<ResourceType>;
  fromStateVersion?: Maybe<Scalars['BigInt']['output']>;
  isRoyaltyVault?: Maybe<Scalars['Boolean']['output']>;
  nonFungibleIds?: Maybe<Array<Maybe<Scalars['BigInt']['output']>>>;
  ownerEntityId?: Maybe<Scalars['BigInt']['output']>;
  resourceEntityId?: Maybe<Scalars['BigInt']['output']>;
  vaultEntityId?: Maybe<Scalars['BigInt']['output']>;
};

/**
 * A condition to be used against `MvLatestEntityVaultState` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type MvLatestEntityVaultStateCondition = {
  /** Checks for equality with the object’s `balance` field. */
  balance?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `discriminator` field. */
  discriminator?: InputMaybe<ResourceType>;
  /** Checks for equality with the object’s `fromStateVersion` field. */
  fromStateVersion?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `isRoyaltyVault` field. */
  isRoyaltyVault?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks for equality with the object’s `nonFungibleIds` field. */
  nonFungibleIds?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  /** Checks for equality with the object’s `ownerEntityId` field. */
  ownerEntityId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `resourceEntityId` field. */
  resourceEntityId?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `vaultEntityId` field. */
  vaultEntityId?: InputMaybe<Scalars['BigInt']['input']>;
};

/** A connection to a list of `MvLatestEntityVaultState` values. */
export type MvLatestEntityVaultStatesConnection = {
  __typename?: 'MvLatestEntityVaultStatesConnection';
  /** A list of edges which contains the `MvLatestEntityVaultState` and cursor to aid in pagination. */
  edges: Array<MvLatestEntityVaultStatesEdge>;
  /** A list of `MvLatestEntityVaultState` objects. */
  nodes: Array<MvLatestEntityVaultState>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MvLatestEntityVaultState` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `MvLatestEntityVaultState` edge in the connection. */
export type MvLatestEntityVaultStatesEdge = {
  __typename?: 'MvLatestEntityVaultStatesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `MvLatestEntityVaultState` at the end of the edge. */
  node: MvLatestEntityVaultState;
};

/** Methods to use when ordering `MvLatestEntityVaultState`. */
export enum MvLatestEntityVaultStatesOrderBy {
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  DiscriminatorAsc = 'DISCRIMINATOR_ASC',
  DiscriminatorDesc = 'DISCRIMINATOR_DESC',
  FromStateVersionAsc = 'FROM_STATE_VERSION_ASC',
  FromStateVersionDesc = 'FROM_STATE_VERSION_DESC',
  IsRoyaltyVaultAsc = 'IS_ROYALTY_VAULT_ASC',
  IsRoyaltyVaultDesc = 'IS_ROYALTY_VAULT_DESC',
  Natural = 'NATURAL',
  NonFungibleIdsAsc = 'NON_FUNGIBLE_IDS_ASC',
  NonFungibleIdsDesc = 'NON_FUNGIBLE_IDS_DESC',
  OwnerEntityIdAsc = 'OWNER_ENTITY_ID_ASC',
  OwnerEntityIdDesc = 'OWNER_ENTITY_ID_DESC',
  ResourceEntityIdAsc = 'RESOURCE_ENTITY_ID_ASC',
  ResourceEntityIdDesc = 'RESOURCE_ENTITY_ID_DESC',
  VaultEntityIdAsc = 'VAULT_ENTITY_ID_ASC',
  VaultEntityIdDesc = 'VAULT_ENTITY_ID_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Account`. */
  accounts?: Maybe<AccountsConnection>;
  /** Reads and enables pagination through a set of `LatestAccountLockersByAccount`. */
  latestAccountLockersByAccounts?: Maybe<LatestAccountLockersByAccountsConnection>;
  /** Reads and enables pagination through a set of `LatestEntityMetadatum`. */
  latestEntityMetadata?: Maybe<LatestEntityMetadataConnection>;
  /** Reads and enables pagination through a set of `MvLatestAccountLockersByAccount`. */
  mvLatestAccountLockersByAccounts?: Maybe<MvLatestAccountLockersByAccountsConnection>;
  /** Reads and enables pagination through a set of `MvLatestEntityVaultState`. */
  mvLatestEntityVaultStates?: Maybe<MvLatestEntityVaultStatesConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AccountCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLatestAccountLockersByAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<LatestAccountLockersByAccountCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LatestAccountLockersByAccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLatestEntityMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<LatestEntityMetadatumCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LatestEntityMetadataOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMvLatestAccountLockersByAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MvLatestAccountLockersByAccountCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MvLatestAccountLockersByAccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMvLatestEntityVaultStatesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MvLatestEntityVaultStateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MvLatestEntityVaultStatesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

export enum ResourceType {
  Fungible = 'FUNGIBLE',
  NonFungible = 'NON_FUNGIBLE'
}

export type ResourceVaultPair = {
  __typename?: 'ResourceVaultPair';
  resourceEntityAddress?: Maybe<Scalars['String']['output']>;
  resourceEntityId?: Maybe<Scalars['BigInt']['output']>;
  resourceMetadata?: Maybe<Scalars['JSON']['output']>;
  vaultBalance?: Maybe<Scalars['BigFloat']['output']>;
  vaultEntityAddress?: Maybe<Scalars['String']['output']>;
  vaultEntityId?: Maybe<Scalars['BigInt']['output']>;
};

/** An input for mutations affecting `ResourceVaultPair` */
export type ResourceVaultPairInput = {
  resourceEntityAddress?: InputMaybe<Scalars['String']['input']>;
  resourceEntityId?: InputMaybe<Scalars['BigInt']['input']>;
  resourceMetadata?: InputMaybe<Scalars['JSON']['input']>;
  vaultBalance?: InputMaybe<Scalars['BigFloat']['input']>;
  vaultEntityAddress?: InputMaybe<Scalars['String']['input']>;
  vaultEntityId?: InputMaybe<Scalars['BigInt']['input']>;
};
