import React, { useState } from 'react';
import { StyleSheet, Text, View,  ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
    { name: 'guy', id: '8' },
    { name: 'bones', id: '9' },
    { name: 'jones', id: '10' },
    { name: 'gunn', id: '11' },
  ]);

  return (
    <View style={styles.container}>

      <ScrollView>
          { people.map(item => (
              <View Key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            ))}
          
          
            
      
        
      </ScrollView> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});