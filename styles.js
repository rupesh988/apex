import { StyleSheet ,Dimensions} from "react-native";
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F9FF',
      alignItems: 'center',
      
    },
    top :{
        height : 100,
        backgroundColor : '#FFFFFF',
        alignSelf : 'stretch',
        elevation : 1,
        justifyContent : 'center',
        padding : 20,
        paddingTop : 50
        
    },
    bottom :{
        minHeight : 140,
        backgroundColor : '#FFFFFF',
        alignSelf : 'stretch',
        elevation :3
        
    },
    middle : {
        flex : 1,
        backgroundColor : '#F2F9FF',
        justifyContent : 'center',
        alignItems : 'center'
    },
    webwrap : {
        width : 320,
        height : 400,
        margin : 20,
        backgroundColor : '#FFFDF0',
        borderRadius : 6,
        overflow : 'hidden',
        elevation : 1

    },
    web :{

    },
    generate :{
        backgroundColor : '#A294F9',
        height : 50,
        margin : 10,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        elevation : 5,
        shadowColor : '#AD49E1'
    },
    generateText : {
        color : '#FFFFFF',
        fontSize : 20

    },
    input :{
        margin : 10,
        backgroundColor : '#EFF3EA',
        minHeight : 50,
        paddingHorizontal : 7,
        justifyContent : 'center',
        borderWidth : 1,
        borderRadius : 10,

    },
    inputText :{
        fontSize : 17,
        fontWeight : 'bold'
    },
    topText :{
        fontSize : 25,
        fontWeight : 'bold'
    }
  });