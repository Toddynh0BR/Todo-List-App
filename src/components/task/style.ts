import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
   width: '100%',
   height: 64,
   flexDirection: 'row',
   marginBottom: 8,
   backgroundColor: '#262626',
   borderRadius: 8,
   alignItems: 'center',
   padding: 20,
   gap: 20
  },
  complete: {
   width: 24,
   height: 24,
   borderRadius: 50,
   backgroundColor: '#5E60CE',
   justifyContent: 'center',
   alignItems: 'center'
  },
  inComplete: {
   width: 24,
   height: 24,
   borderWidth: 1,
   borderColor: '#4EA8DE',
   borderRadius: 50,
  },
  text: {
   flex: 1,
   fontSize: 14,
   color: '#F2F2F2'
  },
  textIncomplet: {
   flex: 1,
   fontSize: 14,
   color: '#808080',
   textDecorationLine: 'line-through'
  }
})