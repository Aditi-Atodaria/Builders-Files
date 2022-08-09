import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class AddProjectScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <SafeAreaView style={Styles.safeArea}></SafeAreaView>
        <ImageBackground
          source={require('../assets/background2.gif')}
          style={Styles.backgroungImage}>
          <View>
            <Text style={Styles.title}>ADD PROJECT</Text>
          </View>
          <View>
            <TextInput
              placeholder="NAME OF SITE"
              placeholderTextColor="black"
              style={Styles.input}
            />
            <TextInput
              placeholder="NO. OF UNITS"
              placeholderTextColor="black"
              keyboardType="numeric"
              style={Styles.input}
            />
            <TextInput
              placeholder="NO. OF BOOKED SITES"
              placeholderTextColor="black"
              keyboardType="numeric"
              style={Styles.input}
            />
            <TextInput
              placeholder="NO. OF SITES ON HOLD"
              placeholderTextColor="black"
              keyboardType="numeric"
              style={Styles.input}
            />
            <TextInput
              placeholder="NO. OF SITES ON LOAN"
              placeholderTextColor="black"
              keyboardType="numeric"
              style={Styles.input}
            />
          </View>

          <TouchableOpacity>
            <Text style={Styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    flex: 1,
  },
  safeArea: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  backgroungImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1.5,
    marginTop: 50,
    margin: 10,
    color: 'black',
    padding: 10,
    fontSize: 17,
  },
  buttonText: {
    color: '#4c52c4',
    // fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 6,
    marginTop: 50,
    fontSize: 20,
  },
  title: {
    fontWeight:'lighter',
    fontSize: 35,
    marginTop: 20,
  },
});
