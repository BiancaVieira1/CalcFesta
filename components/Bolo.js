import React from "react";
import {StyleSheet, Text} from "react-native";

export default function Bolo(props){
    let texto = []
    if(props.qtConvidados != ""){
        if((props.qtConvidados * 100) > 1000){
            texto.push(
                <Text style={styles.texto}>
                    Bolo: {(props.qtConvidados * 100)/1000} Kg
                </Text>
                );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    Bolo: {props.qtConvidados * 100} gramas
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