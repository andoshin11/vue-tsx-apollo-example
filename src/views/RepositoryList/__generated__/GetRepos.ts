/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepos
// ====================================================

export interface GetRepos_viewer_repositories_nodes_primaryLanguage {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface GetRepos_viewer_repositories_nodes_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepos_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Identifies if the repository is a fork.
   */
  isFork: boolean;
  /**
   * The primary language of the repository's code.
   */
  primaryLanguage: GetRepos_viewer_repositories_nodes_primaryLanguage | null;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: GetRepos_viewer_repositories_nodes_stargazers;
}

export interface GetRepos_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetRepos_viewer_repositories_nodes | null)[] | null;
}

export interface GetRepos_viewer {
  __typename: "User";
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetRepos_viewer_repositories;
}

export interface GetRepos {
  /**
   * The currently authenticated user.
   */
  viewer: GetRepos_viewer;
}
