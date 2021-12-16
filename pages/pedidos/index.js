import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView} from "react-native";
import style from "./style.js";


export default function Pedidos({}) {
    const {id} = route.params;
    const[Pedidos, setPedidos] = useState({
        "nomePedidos": "",
        "entregadores": [
            {
                "Id_entregador": 1,
                "nome": ""
            },
            
        ],
        "nomeCoach": ""
    });

    useEffect(() => {
        let url ="http://10.87.207.2:3000/entregas/entregadores"+id;

        fetch(url)
        .then(resp => { return resp.json();})
        .then(data => { console.log(data);setPedidos(data); })
    },[]);
    return(
        <ScrollView style={style.tela}>
            {
                Pedidos.Entregadores.map((e, index) => {
                    return(
                        <TouchableOpacity style={style.touc} key={index}>
                            <Text style={style.texto}>{Pedidos.Id_entregador}</Text>
                            <View>
                                <Text style={style.texto2}>{e.Id_entregador}</Text>
                                <Text style={style.texto2}>{e.nome}</Text>
                            </View>
                            <Text  style={style.texto}>{Pedidos.nomeCoach}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

