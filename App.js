import 'react-native-gesture-handler'
import React from 'react'

import FirebaseState from './context/firebase-context/firebaseState'
import AppState from './context/app-context/appState'

import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import { StatusBar, StyleSheet } from 'react-native'

import CartIcon from './components/CartIcon'

import Form from './views/Form'
import Menu from './views/Menu'
import Product from './views/Product'
import Resume from './views/Resume'
import Progress from './views/Progress'

const Stack = createStackNavigator()

const App = () => {
  return (
    <FirebaseState>
      <AppState>
        <StatusBar backgroundColor="#f55632" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: {
                backgroundColor: '#f55632',
              },
              headerTitleStyle: {
                color: '#fff',
              },
              headerTintColor: '#fff',
            }}
          >
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={({ navigation, route }) => ({
                title: 'Menu',
                headerRight: () => (
                  <CartIcon onPress={() => navigation.navigate('Resume')} />
                ),
              })}
            />

            <Stack.Screen
              name="Form"
              component={Form}
              options={{ title: 'Form idk why...' }}
            />

            <Stack.Screen
              name="Progress"
              component={Progress}
              options={{ title: 'Progreso' }}
            />

            <Stack.Screen
              name="Resume"
              component={Resume}
              options={{ title: 'Resumen' }}
            />

            <Stack.Screen
              name="Product"
              component={Product}
              options={{ title: 'Producto' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppState>
    </FirebaseState>
  )
}

const styles = StyleSheet.create({})

export default App