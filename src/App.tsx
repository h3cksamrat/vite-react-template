import { useContext, useLayoutEffect } from 'react';
import { Logger } from '@utils/logger.util';
import AuthState from '@store/auth/auth.state';

const logger = new Logger('App');

function App() {
  const { checkLogin } = useContext(AuthState);

  useLayoutEffect(() => {
    checkLogin().catch(logger.error);
    logger.info('App initialized');
  }, []);

  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
