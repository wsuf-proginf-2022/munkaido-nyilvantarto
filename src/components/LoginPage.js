import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native';

const LoginPage = ({ setUserData }) => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButtonLeft, !isSignUpActive && styles.active]}
          onPress={() => {
            setIsSignUpActive(false);
          }}>
          <Text style={[styles.toggleButtonText, !isSignUpActive && styles.activeText]}>
            Bejelentkezés
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButtonRight, isSignUpActive && styles.active]}
          onPress={() => {
            setIsSignUpActive(true);
          }}>
          <Text style={[styles.toggleButtonText, isSignUpActive && styles.activeText]}>
            Regisztráció
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <View style={styles.formContainer}>
          {isSignUpActive ? (
            <Text style={styles.title}>Regisztráció</Text>
          ) : (
            <Text style={styles.title}>Bejelentkezés</Text>
          )}
          <TextInput style={styles.input} placeholder="email cím" />
          <TextInput style={styles.input} placeholder="Név" />
          <TextInput style={styles.input} placeholder="jelszó" />
          {isSignUpActive && <TextInput style={styles.input} placeholder="jelszó mégegyszer" />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
    // https://stackoverflow.com/a/59183680/9004180
    // fixing the scrolling of the FlatList
    // flex: 1 just means "take up the entire space" (whatever "entire" that may be).
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 30,
    color: '#000000',
  },
  input: {
    height: 40,
    // width: 190,
    margin: 12,
    borderWidth: 2,
    borderRadius: 14,
    paddingHorizontal: 20,
    color: '#000000',
  },
  formContainer: {
    paddingHorizontal: 40,
    alignSelf: 'stretch',
    flex: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 20 : 20,
  },
  toggleButtonLeft: {
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  toggleButtonRight: {
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  toggleButtonText: {
    fontSize: 17,
    color: 'black',
  },
  active: {
    backgroundColor: '#0851c7',
  },
  activeText: {
    color: '#ffffff',
  },
});

export default LoginPage;
