/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myrepo
// ====================================================

export interface myrepo_viewer_repositories_nodes {
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
   * Identifies if the repository is private.
   */
  isPrivate: boolean;
}

export interface myrepo_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (myrepo_viewer_repositories_nodes | null)[] | null;
}

export interface myrepo_viewer {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: myrepo_viewer_repositories;
}

export interface myrepo {
  /**
   * The currently authenticated user.
   */
  viewer: myrepo_viewer;
}

export interface myrepoVariables {
  number_of_repos: number;
}
