import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Explore from './Components/Explore';
import { Profile } from './Components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Explore />
        <Home/>
        <Profile />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


