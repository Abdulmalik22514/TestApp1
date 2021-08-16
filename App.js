import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/utils/store/index';
import SplashScreen from './src/screens/splash/splash';
import {View, StyleSheet} from 'react-native';

export default function App() {
  const [isVisible, setVisible] = useState(true);

  const showMainScreen = () => {
    setVisible(false);
  };

  useEffect(() => {
    setTimeout(function () {
      showMainScreen();
    }, 1000);
  });

  return (
    <View style={styles.MainContainer}>
      {isVisible === true ? (
        <SplashScreen />
      ) : (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
