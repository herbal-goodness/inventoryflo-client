import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "../reducers/index";
import { mainSaga } from "../sagas/index";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "userInfo"], // only state specified here will be persisted
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(mainSaga);

const persistor = persistStore(store);
export { store, persistor };
