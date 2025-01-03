import { StatusBar } from 'expo-status-bar';
import {Text, View, Dimensions,TouchableOpacity, TextInput } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { WebView } from 'react-native-webview';
import { styles } from './styles';
import { useState } from 'react';
export default function App() {
  NavigationBar.setBackgroundColorAsync("#FFFFFF");
  const [input,setInput] = useState("");
  const [generate,setGenerate] = useState(false);
  const [htmlt,setHtml] = useState("<center><h1>APEX</h1> </center>")
  const API_ENDPOINT = process.env.EXPO_PUBLIC_API_ENDPOINT
  const ACCESS_KEY = process.env.EXPO_PUBLIC_ACCESS_KEY
  async function webGenerate(){
    console.log(input)
    console.log(API_ENDPOINT)
    setGenerate(true)
    const res = await fetch(API_ENDPOINT,{
    method:"POST",
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      prompt:input,
      access : ACCESS_KEY
    })
    });
    if (res){
      const j = await res.json();
      setHtml("<html>" + j.html +"</html>")
      
    }
    setGenerate(false)
    setInput("")
    console.log(htmlt)

  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText} >A P E X</Text>
      </View>
      <View style={styles.middle}>

        <View style={styles.webwrap}>
        <WebView
          allowingReadAccessToURL='*'
          style={styles.web}
          originWhitelist={['*']}
          source={{html:htmlt}}
          userAgent=''
          
        
        />

        </View>

      </View>
      <View style={styles.bottom}>

        <View style={styles.input} >
          <TextInput value={input} onChangeText={setInput} style={styles.inputText} placeholder='Generate a webpage' multiline={true} />
        </View>

        <TouchableOpacity style={ !generate ? styles.generate : styles.generating} onPress={()=>webGenerate()} disabled={generate} >
          {generate ? <Text style={styles.generateText} >Generating </Text> : <Text style={styles.generateText} >Generate</Text>}
        </TouchableOpacity>

      </View>

      <StatusBar style="dark" />
    </View>
  );
}


