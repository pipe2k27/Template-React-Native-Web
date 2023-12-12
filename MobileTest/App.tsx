/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ExternalButton from '../Shared/src/Button.tsx';

const test = 'test';
function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <ExternalButton label={'test'} />
    </SafeAreaView>
  );
}

export default App;
