/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Appbar, Avatar, Button, Card, Text, Title} from 'react-native-paper';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {IChild} from '../types/user-children';
import {LineChart} from 'react-native-chart-kit';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ChildDeatils = ({route, navigation}: any) => {
  const {child} = route.params as {child: IChild};
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Title style={styles.conversationsTitle}>about {child.firstName}</Title>
      </Appbar.Header>

      <ScrollView
        style={{
          padding: 20,
        }}>
        <View style={styles.profileHeader}>
          <Avatar.Text
            label={`${child.firstName[0]}${child.lastName[0]}`}
            size={64}
          />
          <Text
            style={styles.name}>{`${child.firstName} ${child.lastName}`}</Text>
        </View>

        <Card
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#E8F3F1',
            elevation: 0,
          }}>
          <Card.Content>
            <Text variant="bodyMedium">
              {`here you can find the Information about ${child.firstName}, the uptodate information added by the nurse `}
            </Text>
          </Card.Content>

          <Card.Actions>
            <Button
              style={{
                marginTop: 10,
              }}
              onPress={() =>
                navigation.navigate('Vaccination', {
                  child: child,
                })
              }>
              Vaccination Information
            </Button>
          </Card.Actions>
        </Card>

        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', marginTop: 20}}>
          Child Height Information
        </Text>

        <LineChart
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'June',
              'July',
              'Aug',
              'Sept',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                data: child.attributes.height.map(
                  ({value}: {value: number}) => value,
                ),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
          style={{
            marginTop: 20,
            borderRadius: 16,
          }}
        />

        <Text
          variant="headlineSmall"
          style={{fontWeight: 'bold', marginTop: 20}}>
          Child Weight Information
        </Text>

        <LineChart
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'June',
              'July',
              'Aug',
              'Sept',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                data: child.attributes.weight.map(
                  ({value}: {value: number}) => value,
                ),
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
          style={{
            marginTop: 20,
            borderRadius: 16,
          }}
        />
      </ScrollView>
      <Text style={{marginBottom: 20}}>{''}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conversations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 3,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    paddingLeft: 20,
  },
  header: {
    backgroundColor: '#fff',
    elevation: 3,
  },
  conversationsTitle: {
    color: '#000',
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  form: {
    flex: 1,
  },
  spacer: {
    height: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  option: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  optionLabel: {
    fontSize: 16,
  },
});
