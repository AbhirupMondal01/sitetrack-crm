import '@expo/metro-runtime';
import { registerRootComponent } from 'expo';
import App from './App';

// This file is the critical entry point bridge.
// The '@expo/metro-runtime' import is mandatory for preventing the white screen error on web.
registerRootComponent(App);
