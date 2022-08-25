export interface ILoginResponse {
  access_token: string;
  user: {
    _id: string;
    email: string;
    lastName: string;
    firstName: string;
  };
}

export interface IUserResponse {
  _id: string;
  email: string;
  lastName: string;
  firstName: string;
}
