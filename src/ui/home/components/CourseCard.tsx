import React from 'react';
import {Text, View} from 'react-native';
import {Course} from '../models/course';
import {courseStyles} from '../styles/CourseCardStyles';
import {StudentCard} from './StudentCard';

export const CourseCard = ({
  title,
  description,
  teacher,
  topic,
  students,
}: Course) => {
  return (
    <View style={courseStyles.container}>
      <View style={courseStyles.header}>
        <Text style={courseStyles.title}>{title}</Text>
      </View>
      <View style={courseStyles.content}>
        <Text style={courseStyles.text}>{teacher}</Text>
        <Text style={courseStyles.text}>{description}</Text>
        <Text style={courseStyles.text}>{topic}</Text>
      </View>
      <Text style={courseStyles.studentTitle}>Estudiantes</Text>
      {students.length !== 0 ? (
        students.map((item, index) => (
          <View key={index}>
            <StudentCard name={item.name} email={item.email} />
          </View>
        ))
      ) : (
        <Text style={courseStyles.errorText}>NO HAY ESTUDIANTES</Text>
      )}
    </View>
  );
};
