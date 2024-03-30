import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import StackScreens from './src/navigators/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  
  return (
    <AuthProvider>
    <NavigationContainer>
      <StackScreens/>
    </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
