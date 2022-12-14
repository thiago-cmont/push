/**
 * @format
 */

 import React from 'react';
 import messaging from '@react-native-firebase/messaging';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
      console.log('App launched by iOS in background, ignore it' );
      // App has been launched in the background by iOS, ignore
      return null;
    }
    return <App />;
  }
  AppRegistry.registerComponent(appName, () => HeadlessCheck)
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message is handled in the background!', remoteMessage);
  });