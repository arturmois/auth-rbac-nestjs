import { UserFromJwt } from './UserFromJwt';

export interface UserToken {
  access_token: string;
  user: UserFromJwt;
}
