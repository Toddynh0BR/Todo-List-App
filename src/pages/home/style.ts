import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
     width: '100%',
     height: '100%',
     backgroundColor: '#1A1A1A',
     alignItems: 'center'
    },
    header: {
     width: '100%',
     height: 173,
     backgroundColor: '#0D0D0D',
     alignItems: 'center',
     paddingTop: 70,
     paddingLeft: 10,
     paddingRight: 10,
     position: 'relative'
    },
    InputBox: {
     flexDirection: 'row',
     alignItems: 'center',
     gap: 4,
     position: 'absolute',
     bottom: -40,
     width: '100%',
     justifyContent: 'center',
     padding: 20
    },
    TextInput: {
     flex: 1,
     height: 54,
     backgroundColor: '#262626',
     borderRadius: 6,
     paddingLeft: 20,
     color: '#F2F2F2'
    },
    Button: {
     width: 52,
     height: 52,
     backgroundColor: '#1E6F9F',
     borderRadius: 6,
     justifyContent: 'center',
     alignItems: 'center'
    },
    utilsBox: {
     width: '100%',
     marginTop: 30,
     marginBottom: 20,
     padding: 30,
     paddingBottom: 0,
     flexDirection: 'row',
     justifyContent: 'space-between'
    },
    Util: {
     flexDirection: 'row',
     gap: 8,
    },
    utilText: {
     fontSize: 14,
     fontWeight: 'bold'
    },
    utilCounter: {
     width: 25,
     height: 19,
     backgroundColor: '#333333',
     borderRadius: 999,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 0,
     position: 'relative'
    },
    utilTextCounter: {
     color: '#D9D9D9',
     position: 'absolute',
     fontSize: 12,
     fontWeight: 'bold'
    },
    listEmptyBox: {
     width: '100%',
     alignItems: 'center',
     paddingTop: 50,
     gap: 1,
     borderTopWidth: 1,
     borderTopColor: '#333333'
    },
    listEmptyText1: {
     fontSize: 14,
     fontWeight: 'bold',
     color: '#808080',
     marginTop: 20
    },
    listEmptyText2: {
     fontSize: 12,
     fontWeight: '400',
     color: '#808080'
    }
})