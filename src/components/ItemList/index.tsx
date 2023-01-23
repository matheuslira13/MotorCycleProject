import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import {styles} from '../ItemList/styles'


type ItemListProps = { 
    name: string,
    id: string,
  }


  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
    },
  ];


export const ItemList = ( {name, id}: ItemListProps) => {
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={(item) => {
            return (
               <View>
              <TouchableOpacity style={styles.item}onPress={() => alert('working')}>
              
              <Text style={styles.title}>{item.item.name}</Text>
               
    
             </TouchableOpacity>

              </View>
            )}}
          
        />
        
      </SafeAreaView>
    );
  }