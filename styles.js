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
        Height : 140,
        backgroundColor : '#FFFFFF',
        alignSelf : 'stretch',
        // elevation :3
        
    },
    middle : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        justifyContent : 'center',
        alignItems : 'center',
        overflow : "hidden"
    },
    webwrap : {
        width : 320,
        height : 460,
        margin : 20,
        backgroundColor : '#FFFFFF',
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
    generating :{
        backgroundColor : '#BCCCDC',
        height : 50,
        margin : 10,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        elevation : 5,
        shadowColor : '#AD49E1'
    },
    input :{
        margin : 10,
        backgroundColor : '#F5F5F5',
        minHeight : 50,
        paddingHorizontal : 7,
        justifyContent : 'center',
        borderWidth : 0.2,
        borderRadius : 10,
        maxHeight : 80,
        elevation : 3

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