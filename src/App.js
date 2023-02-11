import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InnerPage from './src/components/InnerPage';
import LoginPage from './src/components/LoginPage';

const App = props => {
  const [userData, setUserData] = useState(null);

  if (userData === null) {
    return <LoginPage />;
  }
  return <InnerPage />;
};

export default App;
