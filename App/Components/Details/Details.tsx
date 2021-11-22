import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';

  function Details ({navigation}:any):JSX.Element {
      return (
          <View>
              <Button title='go search James' onPress={()=>navigation.navigate('Other', {search: 'James'})} />
              <Text>Details Screen</Text>
          </View>
      )
  }

  const styles = StyleSheet.create({
      title: {

      },
      paragraph: {

      }
  })

  export default Details