import React from 'react';
import {AppRegistry,LogBox,DeviceEventEmitter} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './includes/store';
import IdleScreen from './screens/idleScreen';
LogBox.ignoreAllLogs(true);
const store = configureStore();
const ReduxOp = () =><Provider store={store}>
<IdleScreen />
</Provider>;
AppRegistry.registerComponent(appName,()=>ReduxOp);