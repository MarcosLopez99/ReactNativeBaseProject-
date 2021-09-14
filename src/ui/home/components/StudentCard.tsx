import React from 'react';
import {Text, View} from 'react-native';
import {Student} from '../models/student';
import {studentStyles} from '../styles/StudentCardStyles';

export const StudentCard = ({name, email}: Student) => {
  return (
    <View style={studentStyles.container}>
      <View style={studentStyles.header}>
        <Text style={studentStyles.title}>{name}</Text>
      </View>
      <Text style={studentStyles.text}>{email}</Text>
    </View>
  );
};
