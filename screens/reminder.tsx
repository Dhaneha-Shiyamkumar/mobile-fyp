/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Appbar, Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View} from 'react-native';
import Notification from '../utils/notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native-gesture-handler';

export const SetReminderScreen = ({navigation, route}: any) => {
  const [savedReminder, setSavedReminder] = useState<{
    name: string;
    date: string;
  } | null>(null);
  const [reminderSetView, setIsReminderSetView] = useState(false);

  const [date, setDate] = useState(new Date());
  const [reminder, setReminder] = useState('');
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    getReminder().then(data => {
      if (data) {
        setSavedReminder(data);
      }
    });
  }, []);

  React.useEffect(() => {
    if (route.params?.refresh) {
      getReminder().then(data => {
        setSavedReminder(data);
      });
    }
  }, [route.params]);

  const getReminder = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('reminder');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const saveReminder = async () => {
    const reminderObject = {
      name: reminder,
      date: date.toString(),
    };

    try {
      await AsyncStorage.setItem('reminder', JSON.stringify(reminderObject));
    } catch (e) {
      console.log(e);
    }

    getReminder().then(data => {
      if (data) {
        setSavedReminder(data);
      }
    });

    Notification.scheduleNotification({reminder, date: date});
  };

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

        {reminderSetView ? (
          <View style={{marginTop: 30}}>
            <Text variant="headlineSmall" style={{fontWeight: 'bold'}}>
              Set Reminder
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter a reminder"
              onChangeText={text => setReminder(text)}
              placeholderTextColor="black"
            />
            <Pressable
              onPress={() => setOpen(true)}
              style={[styles.input, {marginTop: 0}]}>
              <Text>{date ? date.toString() : 'Enter time'}</Text>
            </Pressable>

            <Button
              onPress={() => saveReminder()}
              mode="contained"
              style={styles.buttonSave}>
              Save
            </Button>

            <Pressable
              onPress={() => {
                navigation.navigate('Dashboard', {savedReminder});
              }}
              style={{padding: 20}}>
              {savedReminder ? (
                <View>
                  <Text style={styles.header}>Saved Reminder</Text>
                  <Text>Reminder Name --- {savedReminder?.name}</Text>
                  <Text>Date --- {savedReminder?.date}</Text>
                </View>
              ) : (
                <Text>No Reminders Saved</Text>
              )}
            </Pressable>

            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={d => {
                setOpen(false);
                setDate(d);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        ) : (
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => setIsReminderSetView(true)}>
            Set Reminder
          </Button>
        )}
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
