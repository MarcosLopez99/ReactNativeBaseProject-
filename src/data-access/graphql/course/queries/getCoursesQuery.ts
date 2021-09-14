import {gql} from 'graphql-tag';

export const GET_COURSES_QUERY = gql`
  {
    getCourses {
      _id
      title
      teacher
      description
      topic
      students {
        _id
        name
        email
        avatar
      }
      level
    }
  }
`;
