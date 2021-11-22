/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './App/Components/Home/Home';
import Details from './App/Components/Details/Details';
import Other from './App/Components/Details/Other';
import SearchHeader from './App/Components/Details/SearchHeader';

const RootStack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function printName() {
    console.log('logging button on press');
  }

  return (
    // setting routes
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Home' 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e33f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
            
            <RootStack.Screen name='Home' component={Home} options={
              {
                title: 'Welcome',
                
              }
              } />
            <RootStack.Screen name='Details' component={Details} options={{headerTitle: ()=><SearchHeader />}} />
            <RootStack.Screen name='Other' component={Other} options={ ({route}:{route:any})=>({title: route.params.search}) } />
      </RootStack.Navigator>
    </NavigationContainer>
    
    // <View style={backgroundStyle}>
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <View>
    //         <Text style={styles.firstText} >This is my first text in RN</Text>
    //         <Button title="My first button in RN" onPress={printName} />
    //       </View>
    //     </View>
    //   </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  firstText: {
    fontFamily: 'Play-Regular',
    fontSize: 20,
  },
});

export default App;
