import { View } from 'react-native';
import React, { useContext } from 'react';
import DarkMode from '../utils/darkmode.context';
import { Text } from '../utils/Theme';

export default function Home() {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text isDarkMode={isDarkMode}>This is the home screen</Text>
    </View>
  );
}

