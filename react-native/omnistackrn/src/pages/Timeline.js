import React, { Component } from "react";
import api from '../services/api';

import { View, FlatList, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Timeline extends Componet {
  static navigationOpitions = {
    title: "Inicio",
    handerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon 
          style={{ marginRisht: 20 }}
          name="add=circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>

    )
  };  
  
  async componentDidMount() {
    const response = await api.get('tweets');

    this.setState({ tweets: response.data });
  }
  state = {
    tweets: [],
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
