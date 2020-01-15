export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Author = {
  readonly __typename?: 'Author',
  readonly id: Scalars['Int'],
  readonly name: Scalars['String'],
};

export type Book = {
  readonly __typename?: 'Book',
  readonly id: Scalars['Int'],
  readonly title: Scalars['String'],
  readonly author: Author,
};

export type CreateBookInput = {
  readonly title: Scalars['String'],
  readonly authorId: Scalars['Int'],
};

export type Mutation = {
  readonly __typename?: 'Mutation',
  readonly createBook: Maybe<Book>,
};


export type MutationCreateBookArgs = {
  input: CreateBookInput
};

export type Query = {
  readonly __typename?: 'Query',
  readonly books: Maybe<ReadonlyArray<Maybe<Book>>>,
  readonly authors: Maybe<ReadonlyArray<Maybe<Author>>>,
  readonly author: Maybe<Author>,
};


export type QueryAuthorArgs = {
  id: Maybe<Scalars['Int']>
};
