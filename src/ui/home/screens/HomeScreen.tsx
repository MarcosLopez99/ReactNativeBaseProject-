import React from 'react';
import {FlatList} from 'react-native';
import {CourseCard} from '../components/CourseCard';
import {HomeHeader} from '../components/HomeHeader';
import {useCourse} from '../hooks/useCourse';

export const HomeScreen = () => {
  const {courses} = useCourse();
  const keyEstractor = (item: any, index: number) => item + index;

  const renderCoursesList = ({item, index}: any) => (
    <CourseCard
      key={index}
      title={item.title}
      teacher={item.teacher}
      description={item.description}
      topic={item.topic}
      students={item.students}
    />
  );

  return (
    <>
      <HomeHeader title="Cursos" />
      <FlatList
        data={courses}
        renderItem={renderCoursesList}
        keyExtractor={keyEstractor}
      />
    </>
  );
};
