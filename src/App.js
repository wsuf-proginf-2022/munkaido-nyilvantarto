import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InnerPage from './components/InnerPage';
import LoginPage from './components/LoginPage';

const App = props => {
  const [userData, setUserData] = useState(null);

  if (userData === null) {
    return <LoginPage />;
  }
  return <InnerPage />;
};

export default App;
