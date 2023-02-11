import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { loginStatus } from './auth';
import InnerPage from './components/InnerPage';
import LoginPage from './components/LoginPage';
import { getUserData } from './localStorage';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // immediately invoked ( async ) function expression : IFEE
    (async () => {
      const storedUserData = await getUserData();
      if (storedUserData) {
        setUserData(storedUserData);
      }
    })();
  }, []);

  if (userData === null) {
    return <LoginPage setUserData={setUserData} />;
  }
  return <InnerPage setUserData={setUserData} userData={userData} />;
};

export default App;
