import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import persistedReducers from './persitReducers';
import rootReducer from './modules/rootReducer';

const store = createStore(
  persistedReducers(rootReducer),
  composeWithDevTools(applyMiddleware()),
);
const persitor = persistStore(store);

export { store, persitor };
