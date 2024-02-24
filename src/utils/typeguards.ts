import { GithubError, GithubUser } from 'types';

export const isGithubUser = (user: GithubError | GithubUser): user is GithubUser => 'id' in user;