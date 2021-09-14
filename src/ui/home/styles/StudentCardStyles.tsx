import { StyleSheet } from "react-native";

export const studentStyles = StyleSheet.create({
    container: {
      width: '90%',
      height: 80,
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
      marginBottom: 10,
    },
    header: {
      width: '100%',
      height: 40,
      backgroundColor: '#345B63',
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
    text: {
      fontSize: 14,
      color: '#152D35',
      alignSelf: 'center',
    },
  });
  