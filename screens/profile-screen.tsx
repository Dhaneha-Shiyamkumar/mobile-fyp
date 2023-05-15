/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';

export const ProfileScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={{padding: 20}}>
        <Text variant="headlineMedium" style={{fontWeight: 'bold'}}>
          Edit Profile
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  button: {
    width: '100%',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#4318FF',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'gray',
  },
  buttonSave: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: '#4318FF',
  },
});
