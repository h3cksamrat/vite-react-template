import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import toast from '@utils/toast';

interface IMutateParams<P, R> {
  api: (param: P) => Promise<R>;
  success?: string;
  error?: string;
  onSuccess?: (data: R) => void;
  onError?: (err: AxiosError) => void;
}

export function useCustomMutation<P, R>({ api, success, error, onSuccess, onError }: IMutateParams<P, R>) {
  return useMutation(async (param: P) => api(param), {
    onSuccess: (data) => {
      if (onSuccess) onSuccess(data);
      if (success) toast({ message: success, type: 'success' });
    },
    onError: (err: AxiosError) => {
      if (onError) onError(err);
      if (error) toast({ message: error, type: 'error' });
    },
  });
}
