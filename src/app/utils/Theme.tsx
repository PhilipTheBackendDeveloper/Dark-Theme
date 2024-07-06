import { View, Text as DefaultText, TextProps, ViewProps } from 'react-native';

import React from 'react';

type ThemeProps = {
  isDarkMode?: boolean;
};

export function Text(props: TextProps & ThemeProps) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <DefaultText
      style={[
        style,
        {
          color: isDarkMode ? 'gray' : 'black',
          opacity: isDarkMode ? 0.6 : 1,
        },
      ]}
      {...rest}
    />
  );
}

export function Card(props: ViewProps & ThemeProps) {
  const { isDarkMode, style, ...rest } = props;
  return (
    <View
      style={[
        style,
        {
          backgroundColor: isDarkMode ? '#121212' : 'white',
        },
      ]}
      {...rest}
    />
  );
}
