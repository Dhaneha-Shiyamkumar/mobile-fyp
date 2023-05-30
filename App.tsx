import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen} from './screens/login';
import {HomeScreen} from './screens/child-list';
import {DashboardScreen} from './screens/dashboard';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ChildDeatils} from './screens/child-details';
import {SetReminderScreen} from './screens/reminder';
import {ProfileScreen} from './screens/profile-screen';
import {VaccinationScreen} from './screens/vaccination';
import {UploadImageComponent} from './screens/image-to-text';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Toast />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              header: () => <></>,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Reminder" component={SetReminderScreen} />
            <Stack.Screen name="Vaccination" component={VaccinationScreen} />
            <Stack.Screen name="Details" component={ChildDeatils} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen
              name="UploadImageComponent"
              component={UploadImageComponent}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
