import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store, persitor } from './store';

import AppRoutes from './routes/routes';
import DefaultTheme from './config/theme/Default';
import AppStyles from './config/theme/AppStyles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <AppStyles />
        <ThemeProvider theme={DefaultTheme}>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
