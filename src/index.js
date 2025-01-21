import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './style.css';

async function startApp() {
  // Record all sessions on localhost, staging stacks and preview URLs
  if (!isProduction()) {
    // Start the Meticulous recorder before you initialise your app.
    // Note: all errors are caught and logged, so no need to surround with try/catch
    await tryLoadAndStartRecorder({
      recordingToken: '78ldZqG1LzpbeFmXaQORYv6TojAh11cSpkStBgah',
      isProduction: false,
    });
  }

  // Initalise app after the Meticulous recorder is ready, e.g.
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

function isProduction() {
  // TODO: Update me with your production hostname
  return window.location.hostname.indexOf('your-production-site.com') > -1;
}

startApp();
