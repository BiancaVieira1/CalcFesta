import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Refrigerante from './components/Refrigerante';
import Agua from './components/Agua';
import Bolo from './components/Bolo';
import Doce from './components/Doce';
import Salgado from './components/Salgado';


export default function App() {
  const[qtConvidados, setQtConvidados] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> 🎁 Calcular Suprimentos para Festa 🎁</Text>
      <br></br>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1997/1997683.png',
        }}
      />
      <br></br>
      <Text style={styles.titulo}>Digite o Número de Pessoas:</Text>
      <br></br>
      <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={qtConvidados}
            onChangeText={(texto)=>setQtConvidados(texto)}
          />
          <br></br>
          <Refrigerante qtConvidados={qtConvidados} style={styles.coisas}/>
          <Agua qtConvidados={qtConvidados} style={styles.coisas}/>
          <Bolo qtConvidados={qtConvidados} style={styles.coisas}/>
          <Doce qtConvidados={qtConvidados} style={styles.coisas}/>
          <Salgado qtConvidados={qtConvidados} style={styles.coisas}/>
          <br></br>
          <br></br> 
          <Text style={styles.eu}> ©BiaVieira</Text>   
           </View>
     
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff'
  },
  titulo:{
    fontSize: 20
  },
  row:{
    width:'100%',
    marginTop:10
  },
  input:{
    width:'80%',
    borderWidth:1,
    marginLeft:'10%',
    fontSize: 20,
    borderRadius:70
  },
  texto:{
    fontSize:20,
    marginLeft:'10%'
  },
  logo:{
    width:70,
    height:70
  },
  eu:{
    fontSize: 13,
     marginLeft: '50%'
  }
});
