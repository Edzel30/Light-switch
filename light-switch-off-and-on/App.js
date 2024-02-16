import React from 'react';
import { Text, View, Switch, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: '#000000',
    color: 'lightColor',
    bulbImage: require('./assets/Bulb_Off.jpg')
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#0ff3f7' : '#000000';
    const color = switchValue ? 'darkColor' : 'lightColor';
    const bulbImage = switchValue ? require('./assets/Bulb_On.png') : require('./assets/Bulb_Off.jpg');
    this.setState({ switchValue, backgroundColor, color, bulbImage});
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textTitle, styles[this.state.color]]}>Light Switch Off and On</Text>
        <Text style={[styles.textSubTitle, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle}/>
        <Text style={styles.textStyle}>{this.state.switchValue ? 'ON' : ''}</Text>
        <Text style={styles.textStyleS}>{this.state.switchValue ? '' : 'OFF'}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbImage: {
    width: 150,
    height: 200,
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '900',
  },
  textSubTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#000000',
    },
    textStyleS: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#ffffff',
    },

  lightColor: {
    color: '#ffffff',
  },
  darkColor: {
    color: '#000000',
  },
});