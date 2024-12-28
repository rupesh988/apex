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
  const [html,setHtml] = useState("<h1><center>APEX generater </center></h1>")
  async function webGenerate(){
    console.log(input)
    setGenerate(true)
    const res = await fetch(`http://192.168.0.2:5001/generate`,{
    method:"POST",
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      prompt:input
    })
    });
    if (res){
      const j = await res.json();
      setHtml(j.html)
    }
    setGenerate(false)

  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText} >A P E X</Text>
      </View>
      <View style={styles.middle}>

        <View style={styles.webwrap}>
        <WebView 
          style={styles.web}
          originWhitelist={['*']}
          source={{html:html}}
        
        />

        </View>

      </View>
      <View style={styles.bottom}>

        <View style={styles.input} >
          <TextInput value={input} onChangeText={setInput} style={styles.inputText} placeholder='Generate a webpage' multiline={true} />
        </View>

        <TouchableOpacity style={styles.generate} onPress={()=>webGenerate()} disabled={generate} >
          {generate ? <Text style={styles.generateText} >Generating </Text> : <Text style={styles.generateText} >Generate</Text>}
        </TouchableOpacity>

      </View>

      <StatusBar style="dark" />
    </View>
  );
}


