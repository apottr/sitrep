import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Button style={styles.btn} title="FIND A CASE" onPress={()=> this.props.navigation.navigate("Find") } />
        <Button style={styles.btn} title="CREATE A NEW CASE" onPress={()=> this.props.navigation.navigate("Create") } />
      </View>
    );
  }  
}

class FindScreen extends React.Component {
  render(){
    return (
      <View style={styles.view }>
        <Text>AAAAAAA</Text>
      </View>
    )
  }
}

class CreateScreen extends React.Component {
  render(){
    return (
      <View style={styles.view}>
        <Button style={styles.btn} title="TAKE A PICTURE" onPress={()=>{}} />
        <Text>OR</Text>
        <Button style={styles.btn} title="WRITE NOTES" onPress={()=>{}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    margin: "20px",
  },
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Find: FindScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}