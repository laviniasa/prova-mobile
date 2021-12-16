import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, ScrollView  } from 'react-native'
import style from './style.js'

export default function Home({ navigation }) {
    
    const[lista,setLista]= useState([]);

    useEffect(() =>{
        let url = "http://10.87.207.2:3000/entregas/entregadores";
        fetch(url)
        .then((response) =>{ return response.json();})
        .then(data =>{setLista(data);})
    },[]);
    
    return (
        <ScrollView style={style.home}>
            <View>
            {
                lista.map((item,index)=>{
                    return(
                        <TouchableOpacity style={style.conteiner} key={index} onPress={()=>{navigation.navigate("Pedidos",{item})}}>
                            <Text style={style.conteiner_text}>{item.nome}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            </View>
        </ScrollView>
    );
}
