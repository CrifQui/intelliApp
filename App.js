/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppProvider from './src/contexts/contextProvider';
import Stack from './src/navigation/core';
import i18n from './src/utils/i18n';

const App = () => {
  return (
    <AppProvider>
      <Stack />
    </AppProvider>
  );
};

export default App;

// export {default} from './storybook';
