import React from 'react';
import {    StyleSheet,    Text,    View,    Button} from 'react-native';

  function Home ({navigation}:any):JSX.Element {
      return (
          <View>
              <Text>Home Screen</Text>
              <Button title='Go to Details' onPress={()=>navigation.navigate('Details')} />
          </View>
      )
  }

  const styles = StyleSheet.create({
      title: {

      },
      paragraph: {

      }
  })

  export default Home