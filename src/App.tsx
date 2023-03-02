import React, { useEffect } from 'react';

import Layout from './components/layout/Layout';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useDispatch';
import { RoutesNavigation } from './routes/RoutesNavigation';
import { getToken } from './store/features';
import { selectAppInitialized } from './store/features/global/selectors';

const App = (): React.ReactElement => {
  const initialized = useAppSelector(selectAppInitialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, []);

  // if (!initialized) {
  //   return <initializingLoader />;
  // }

  return (
    <Layout>
      <RoutesNavigation />
    </Layout>
  );
};

export default App;
