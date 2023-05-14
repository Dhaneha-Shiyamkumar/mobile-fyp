/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar, Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';

// @TODO
// implment this
// https://www.notjust.dev/blog/2023-02-02-react-native-local-push-notifications

export const SetReminderScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={{padding: 20}}>
        <Text variant="headlineMedium" style={{fontWeight: 'bold'}}>
          Set Reminder
        </Text>

        <Text variant="bodyMedium" style={{marginTop: 20, color: '#A1A8B0'}}>
          Set Reminder with date and time to get notified prior to the
          Vaccination date!
        </Text>

        <Button mode="contained" style={styles.button}>
          Set Reminder
        </Button>
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
});
