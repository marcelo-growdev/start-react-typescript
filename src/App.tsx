import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persitor } from './store';

import HeaderComponent from './components/header/Header';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persitor}>
        <div>
          <h1>Hello World!</h1>
          <HeaderComponent title="teste" />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
