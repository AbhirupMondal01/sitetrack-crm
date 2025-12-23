import { registerRootComponent } from 'expo';
import App from './App';

// This is the bridge that tells Expo to load App.js instead of the 'app' folder
// It ensures that your CRM dashboard is the first thing the user sees.
registerRootComponent(App);
