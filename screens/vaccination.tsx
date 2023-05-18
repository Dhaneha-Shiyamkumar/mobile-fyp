/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Appbar, IconButton, List, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import {IChild} from '../types/user-children';

export const VaccinationScreen = ({route, navigation}: any) => {
  const {child} = route.params as {child: IChild};

  console.log(child);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={{padding: 20}}>
        <Text variant="headlineMedium" style={{fontWeight: 'bold'}}>
          Vaccination Details
        </Text>
      </View>

      <View>
        <List.Section>
          {child.attributes.vaccination.map((vaccination, index) => (
            <List.Item
              key={index}
              title={`Month: ${vaccination.month}`}
              description={`Date: ${vaccination.date}`}
              right={() => (
                <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
                  <Text>Type of Vaccine:</Text>
                  <Text>{vaccination.type}</Text>
                  <IconButton
                    icon={vaccination.done ? 'check' : 'close'}
                    iconColor={vaccination.done ? 'green' : 'red'}
                    size={20}
                  />
                </View>
              )}
            />
          ))}
        </List.Section>
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
