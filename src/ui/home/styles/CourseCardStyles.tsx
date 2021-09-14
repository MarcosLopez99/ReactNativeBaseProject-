import { StyleSheet } from "react-native";

export const courseStyles = StyleSheet.create({
    container: {
      width: '90%',
      backgroundColor: '#D4ECDD',
      marginHorizontal: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 20,
    },
    header: {
      width: '100%',
      height: 40,
      backgroundColor: '#112031',
      justifyContent: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    title: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      color: '#152D35',
    },
    studentTitle: {
      fontSize: 16,
      color: '#112031',
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    errorText: {
      fontSize: 16,
      alignSelf: 'center',
      color: "#911F27"
    },
  });
  