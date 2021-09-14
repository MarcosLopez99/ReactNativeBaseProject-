import React from 'react';
import {Text, View} from 'react-native';
import {homeHeaderStyles} from '../styles/HomeHeaderStyles';

interface HomeHeaderProps {
  title: string;
}

export const HomeHeader = ({title}: HomeHeaderProps) => {
  return (
    <View style={homeHeaderStyles.header}>
      <Text style={homeHeaderStyles.headerTitle}>{title}</Text>
    </View>
  );
};
