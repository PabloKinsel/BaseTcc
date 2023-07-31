import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

import { Participant } from "../Produto/Produto";

export function TelaProdutos() {

  const navigation = useNavigation();
  const route = useRoute();

  const [listParticipant, setListParticipant] = useState([  {name:'Skol Latão 473ml',quantity: 0},
  {name:'Amstel Latão 473ml',quantity: 0},
  {name:'Antarctica Latão 473ml',quantity: 0},
  {name:'Bohemia Latão 473ml',quantity: 0},
  {name:'Brahma Latão 473ml',quantity: 0},
  {name:'Budweiser Latão 473ml',quantity: 0},
  {name:'Devassa Latão 473ml',quantity: 0},
  {name:'Eisebahn Latão 473ml',quantity: 0},
  {name:'Heineken Latão 473ml',quantity: 0},
  {name:'Kaiser Latão 473ml',quantity: 0},
  {name:'Itaipava Latão 473ml',quantity: 0},
  {name:'Polar Latão 473ml',quantity: 0},
  {name:'Schin Latão 473ml',quantity: 0}
  ])
  const [nameParticipant, setNameParticipant] = useState('');
  

  function handleProductClick(product) {
    // Navegar para a tela de venda passando o produto como parâmetro
    navigation.navigate("TelaVenda", { product });
  }    

  function handleParticipantAdd(participant) {
    if (listParticipant.find(item => item.name === participant.trim())) {
      Alert.alert('Este item já está na lista!');
    } else {
      setListParticipant(prevState => [
        ...prevState,
        { name: participant.charAt(0).toUpperCase() + participant.slice(1), quantity: 0 }
      ]);
  
      // Navegar para a aba de venda aqui:
      navigation.navigate("vendas");
  
      // Para acessar o nome do produto na tela de venda, você pode passar o parâmetro pela rota:
      navigation.navigate("vendas", { productName: participant });
    }
  }

  function handleParticipantRemove(participant) {
    Alert.alert("Remover", `Remover produto ${participant.name}`, [
      {
        text: 'Sim',
        onPress: () => {
          setListParticipant(prevState => prevState.filter(item => item.name !== participant.name));
        }
      },
      {
        text: 'Não',
        onPress: () => Alert.alert('Quero manter o produto')
      }
    ]);
  }

  function handleIncreaseQuantity(participant) {
    setListParticipant(prevState =>
      prevState.map(item =>
        item.name === participant.name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecreaseQuantity(participant) {
    if (participant.quantity > 0) {
      setListParticipant(prevState =>
        prevState.map(item =>
          item.name === participant.name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleEvent}>Bar dos Guri</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do produto..."
          placeholderTextColor={"#ffffff"}
          onChangeText={setNameParticipant}
          value={nameParticipant}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => handleParticipantAdd(nameParticipant)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
         data={listParticipant}
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => (
           <TouchableOpacity onPress={() => handleProductClick(item)}>
            <Participant
              name={item.name}
              participantRemove={() => handleParticipantRemove(item)}
            />
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleDecreaseQuantity(item)}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => handleIncreaseQuantity(item)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
           Nenhum item na lista de produtos!!!
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#33b0ef'
  },
  titleEvent: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop:35,    
    textAlign:'center',
    color:'#fff'
  },
  form: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
    backgroundColor:'#4133db',
  },
  button: {
    backgroundColor: '#06d4d8',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  participantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'blue',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 4,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 16,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  listEmptyText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});