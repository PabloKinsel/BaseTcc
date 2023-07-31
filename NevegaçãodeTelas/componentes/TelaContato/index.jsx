import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

import estilos from './estilos';

export default function TelaContato () {
  return (
    <ScrollView>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Entre em contato conosco para obter ajuda!</Text>
      
        <View style={ estilos.contatoLista }>
          <View style={ estilos.contatoBox }>
            <FontAwesome name="phone" size={ 50 } color="#000000" />
            <Text style={ estilos.contatoTitulo}>Telefone:</Text>
            <Text style={ estilos.contatoParagrafo}>+55 55 000000000</Text>
          </View>
          
          <View style={ estilos.contatoBox }>
            <Entypo name="location-pin" size={ 50 } color="#000000" />
            <Text style={ estilos.contatoTitulo}>Endereço:</Text>
            <Text style={ estilos.contatoParagrafo}>Av.Planalto</Text>
          </View>

          <View style={ estilos.contatoBox }>
            <MaterialIcons name="email" size={ 50 } color="#000000" />
            <Text style={ estilos.contatoTitulo}>Email:</Text>
            <Text style={ estilos.contatoParagrafo}>bardosguri24@gmail.com</Text>
          </View>

          <View style={ estilos.contatoBox }>
            <FontAwesome name="instagram" size={ 50 } color="#000000" />
            <Text style={ estilos.contatoTitulo}>Instagram:</Text>
            <Text style={ estilos.contatoParagrafo}>@BarDosGuri😈</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}