import React from "react";
import {StyleSheet, Text} from "react-native";

export default function Salgado(props){
    let texto = []
    if(props.qtConvidados != ""){
        if((props.qtConvidados * 10) > 1000){
            texto.push(
                <Text style={styles.texto}>
                    Salgados: {(props.qtConvidados * 10)/1000} unidades
                </Text>
                );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    Salgados: {props.qtConvidados * 10} unidades
                </Text>
                );
        }
        
    }
    else{
        texto.push(
            <Text></Text>
        );
    }
    return(
        <>
            {texto} 
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20
    }
});
