import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';

import HistoryPage from './HistoryPage';
import StatusPage from './StatusPage';

const Stack = createNativeStackNavigator();

const InnerPage = ({ userData, setUserData }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Munkaidő Nyilvántartó">
          {navigatorProps => (
            <StatusPage {...navigatorProps} setUserData={setUserData} userData={userData} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Napló" component={HistoryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InnerPage;
