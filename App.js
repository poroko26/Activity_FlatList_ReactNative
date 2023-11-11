import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';
import data from './src/list';

const Item = ({ item }) => (
  <TouchableOpacity  style={styles.item}>
    <UserAvatar size={45} name={item.name} />
    <Text style={[styles.title, {}]}>
      {item.name}
      {'\n'}
      <Text style={{ fontWeight: '200' }}>{item.place}</Text>
    </Text>
    <Icon style={{ position: 'absolute', left: 300, top: 0 }} name="dots-three-horizontal" size={30} color="#000" />
  </TouchableOpacity>
);

const App = () => {
 
  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    marginLeft: 15,
  },
  item: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default App;

