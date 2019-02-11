import React, { Component } from "react";
import io from 'socket.io-client';
import api from '../services/api';

import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Timeline extends Componet {
  static navigationOpitions = ( navigation ) => ({
    title: "Inicio",
    handerRight: (
      <TouchableOpacity onPress={() => {() => navigation.navigate('new')}}>
        <Icon 
          style={{ marginRisht: 20 }}
          name="add=circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>

    )
  });  
  
  async componentDidMount() {
    this.subscribeToEvents();
    
    const response = await api.get('tweets');

    this.setState({ tweets: response.data });
  }
  state = {
    tweets: [],
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');

    io.on('tweet', data => {
        this.setState({ tweets: [data, ...this.state.tweets] })
        console.log(data);
    });

    io.on('like', data => {
        this.setState({
            tweets: this.state.tweets.map( 
                tweet => (tweet._id === data._id ? data : tweet)
            )
        });
        console.log(data);
    });
}

  render() {
    return (
      <View style={styles.container}>
          <FlatList 
            fata={this.state.tweet}
            keyExtractor={tweet => tweet._id}
            renderItem={({ item }) => <Tweet tweet={item} /> }
          />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
