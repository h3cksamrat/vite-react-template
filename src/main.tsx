import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import AuthProvider from './store/auth/auth.provider';
import { Logger } from './utils/logger.util';
import './index.css';
import '@styles/toast.css';

if (process.env.NODE_ENV !== 'development') {
  Logger.disable();
}

const queryClient = new QueryClient();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
