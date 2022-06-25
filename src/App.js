import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable,Linking} from 'react-native';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const colorGithub = '#010409';
const imageProfileGithub = 
 'https://avatars.githubusercontent.com/u/86733486?s=96&v=4';

const urlToMyGithub = 'https://github.com/PLuiza12';


const App =()=>{

    const handlePressGoToGithub = async ()=>{
       console.log('Verificando link');
       const res = await Linking.canOpenURL(urlToMyGithub);
       if(res){
         console.log('Link aprovado');
         console.log('Abrindo link ...');
         await Linking.openURL(urlToMyGithub);
       }

    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
               <Image 
                 accessibilityLabel=" Paloma Por do sol" 
                 style={style.avatar} 
                 source={{uri: imageProfileGithub}}
                />
               <Text 
                 accessibilityLabel=" Nome Paloma França"  
                 style={[style.defaultText, style.name]}> 
                 Paloma França 
              </Text>
               <Text 
                 accessibilityLabel=" Nickname PLuiza12" 
                 style={[style.defaultText, style.nickname]}>
                 PLuiza12
              </Text>
               <Text 
                 accessibilityLabel=" Descrição Aprendendo um pouco de cada vez sobre o mundo da tecnologia" 
                 style={[style.defaultText, style.description]}>
                 Aprendendo um pouco de cada vez sobre o mundo da tecnologia
              </Text>
              <Pressable onPress={handlePressGoToGithub}>
              <View style={style.button}>
                  <Text style={[style.defaultText, style.textButton]}>
                     Open in Github
                 </Text>
              </View>
              </Pressable>
                
            </View>
                     
        </SafeAreaView>
    );
    
};

export default App;

const style = StyleSheet.create({
    container:{ //Estilo da View
        backgroundColor: colorGithub,
        flex: 1, //expandir a tela e preencher totalmente
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        alignItems: 'center',
        padding: 40,

    },

    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText:{
        color: colorFontGithub,
    },

    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname:{
        fontSize: 20,
        color: colorDarkFontGithub,

    },

    description:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    button:{
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },

    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
});