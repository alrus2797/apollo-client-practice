/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Adress = {
  __typename?: 'Adress';
  city: Scalars['String']['output'];
  geo: Geo;
  street: Scalars['String']['output'];
  suite: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  post: Post;
  postId: Scalars['ID']['output'];
};

export type CommentsFeed = {
  __typename?: 'CommentsFeed';
  nextPage?: Maybe<Scalars['Int']['output']>;
  results: Array<Comment>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']['output']>;
  catchPhrase?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FeedInputs = {
  _limit?: InputMaybe<Scalars['Int']['input']>;
  _page?: InputMaybe<Scalars['Int']['input']>;
};

export type Geo = {
  __typename?: 'Geo';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String']['output'];
  comments: CommentsFeed;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};


export type PostCommentsArgs = {
  feedInputs?: InputMaybe<FeedInputs>;
};

export type PostsFeed = {
  __typename?: 'PostsFeed';
  nextPage?: Maybe<Scalars['Int']['output']>;
  results: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments: CommentsFeed;
  post?: Maybe<Post>;
  posts: PostsFeed;
};


export type QueryCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentsArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<FeedInputs>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  input?: InputMaybe<FeedInputs>;
};

export type User = {
  __typename?: 'User';
  address: Adress;
  company: Company;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
  username: Scalars['String']['output'];
  website: Scalars['String']['output'];
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostsFeed', nextPage?: number | null, results: Array<{ __typename?: 'Post', id: string, title: string, user: { __typename?: 'User', name: string } }> } };


export const GetAllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;