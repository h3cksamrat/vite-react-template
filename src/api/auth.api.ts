import createApi from '@utils/axios.util';
import { IUserResponse } from '@interfaces/api/auth.interface';
import { AxiosResponse } from 'axios';

const auth = createApi('/auth');

export const getMe = async () => {
  const { data }: AxiosResponse<IUserResponse> = await auth.get('/me');
  return data;
};
