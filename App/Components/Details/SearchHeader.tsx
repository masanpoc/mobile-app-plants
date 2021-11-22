import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

  function SearchHeader ():JSX.Element {
      return (
          <View>
              <Text>SearchHeader: </Text>
              <TextInput/>
          </View>
      )
  }

  const styles = StyleSheet.create({
      title: {

      },
      paragraph: {

      }
  })

  export default SearchHeader